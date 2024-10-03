const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

const { createEmail } = require("./components/createEmail");
const { resetPassword } = require("./components/resetPassword");

puppeteer.use(StealthPlugin());

function delay(params) {
  return new Promise((resolve) => setTimeout(resolve, params));
}

(async () => {
  const password = "WaledGamer123!";

  const browser = await puppeteer.launch({ headless: false });
  const emailPage = await browser.newPage();
  const customUA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";

  // Set custom user agent
  await emailPage.setUserAgent(customUA);

  await emailPage.goto("https://temp-mail.io/en");

  await emailPage.waitForSelector(".email__input");
  await delay(150);

  const email = await emailPage.evaluate(() => {
    let inputElement = document.querySelector("#email");
    return inputElement.getAttribute("title");
  });

  console.log(email);
  if (email == null) return false;
  await createEmail(email);
  await delay(1000)
  await resetPassword(email);

  await emailPage.waitForSelector(".message__title");
  await emailPage.click(".message__title");

  await emailPage.waitForSelector('a[href*="links.surfshark.com/u/click"]');

  const clickPage = await emailPage.evaluate(() => {
    let element = document.querySelector(
      'a[href*="links.surfshark.com/u/click"]'
    );
    return element.getAttribute("href");
  });

  console.log(clickPage); 

  const newPage = await browser.newPage();
  await newPage.goto(clickPage);

  await newPage.waitForSelector(".YoSuD.F8m7M.Zswp6");
  await newPage.type(".YoSuD.F8m7M.Zswp6", password);
  await newPage.waitForSelector(".Dmuut");
  setTimeout(() => {
    newPage.click(".Dmuut");
  }, 1500);

  console.log("Password Reset Completed");

  setTimeout(() => {
    browser.close();
  }, 3000);
  console.clear();
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
})();
