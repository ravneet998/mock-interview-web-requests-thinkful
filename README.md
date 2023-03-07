# mock interview: web requests -thinkful

API Interview
Problem
For this interview, you will be using the Frankfurter API to analyze Foreign Exchange rates.

Get Fx Rates
Create a function called getRates that takes a string as a parameter. The string represents a base currency such as 'USD' for dollars or 'EUR' for euros.

The API endpoint will be similar to this endpoint to fetch exchange rates in USD: https://api.frankfurter.app/latest?from=USD .

Make sure to make the API call update based on the base rate that is passed into getRates.

The function should return the rates object from the result of the API call.

An example output would be

getRates('USD') /* ->
  { GBP: 0.7597682679,
  HKD: 7.7504228687,
  IDR: 14791.948579161,
  ILS: 3.376691475,
  DKK: 6.2932171854,
  INR: 73.4510317997,
  CHF: 0.9141576455,
  MXN: 21.5770466847,
  ...
}
*/
Documentation
For this challenge, you may refer to official documentation resources such as the Node.js reference documentation, the Express.js Documentation and the Mozilla MDN Web Docs.
