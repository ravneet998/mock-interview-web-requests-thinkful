const axios = require("axios");
//Write your functions here
async function getRates(rates) {
  const url = `https://api.frankfurter.app/latest?from=${rates}`;
  const response = await axios.get(url);
  return await response.data.rates;
}


//Do not modify code below this line
module.exports = {getRates};
