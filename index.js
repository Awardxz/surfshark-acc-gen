const TempMail = require("node-temp-mail");
const cheerio = require('cheerio');
const fs = require('fs'); // File system module to save/read files
const axios = require('axios');


const { getRandomEmail } = require("./components/getRandomString");
const { createEmail } = require("./components/createEmail");
const { resetPassword } = require("./components/resetPassword");
const { fetchFinalUrl } = require("./components/fetchFinalUrl");
const { changePassword } = require("./components/changePassword");

async function createEmailStart() {

  const email = getRandomEmail();
  const address =  new TempMail(`${email}`);
  const abc =  address.getAddress();
  await createEmail(`${abc.address}`);
  await resetPassword(`${abc.address}`);

  async function fetchEmail() {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        address.fetchEmails((err, body) => {
          if (err) {
            console.error('Error fetching emails:', err);
            clearInterval(interval);
            reject(err);
          }

          if (body && body.messages && body.messages.length > 0) {
            const emailMessage = body.messages[0];
            const messageBody = emailMessage.message;
            
            fs.writeFileSync('emailBody.html', messageBody, 'utf8');

            clearInterval(interval);
            resolve('emailBody.html');
          } else {
            console.log('No messages yet, retrying...');
          }
        });
      }, 1000);
    });
  }

  let emailLink = '';

  const filePath = await fetchEmail();


  const emailBody = fs.readFileSync(filePath, 'utf8');
  try {

    const $ = cheerio.load(emailBody);
    const link = $('table.text_block a');

    if (link.length) {
      emailLink = link.attr('href'); 
      console.log('Link URL:', emailLink);
    } else {
      console.log('No <a> tag found');
    }
  } catch (error) {
    console.error('Error occurred while fetching or processing the email:', error);
  }

  const finalUrl = await fetchFinalUrl(emailLink);
  console.log("Final URL:", finalUrl);
  const token = finalUrl.split('token=')[1]
  await changePassword(token)
  console.log(abc.address)
  console.log("WaledGamer123!")
}

createEmailStart();
