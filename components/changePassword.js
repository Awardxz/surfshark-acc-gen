const axios = require('axios');
const headers2 = require('../info/headers');


let headers = headers2

async function changePassword(token) {
    let data = JSON.stringify({
        "token": `${token}`,
        "password": "WaledGamer123!",
        "confirmPassword": "WaledGamer123!"
      });
  
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://my.surfy-chinaz.com/auth/api/v1/account/users/password/change",
      headers,
      data: data,
    };
  
    try {
      const response = await axios.request(config);
      console.log("Password Changed");
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error(error); 
    }
  }

module.exports = { changePassword }
  
