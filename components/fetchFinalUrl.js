const axios = require("axios");

async function fetchFinalUrl(originalLink) {
  try {
    const response = await axios.get(originalLink, { maxRedirects: 1 });
    return response.request.res.responseUrl;
  } catch (error) {
    if (error.response) {
      return error.response.request.res.responseUrl;
    }
    throw error;
  }
}


module.exports = { fetchFinalUrl };
