const axios = require("axios");
const headers = require("../info/headers.js");


async function createEmail(email) {
  let data = JSON.stringify({
    email: `${email}`,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://order.surfshark.com/api/v1/account/users?source=one",
    headers,
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Email Created");
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error); 
  }
}

module.exports = { createEmail }
