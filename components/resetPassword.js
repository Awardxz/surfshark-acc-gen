const axios = require('axios');
const headers1 = require('../info/headers');

let headers = headers1

async function resetPassword(email) {
    let data = JSON.stringify({
      email: `${email}`,
    });
  
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://my.surfshark.com/auth/api/v1/account/users/password/reset',
        headers,
        data : data
      };
  
    try {
      const response = await axios.request(config);
      console.log("Password Link Sent")
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error(error); // Use `console.error` for logging errors
    }
  }

module.exports = { resetPassword }