const axios = require('axios');
require('dotenv').config();

axios.get(process.env.GET_DATA)
  .then(function (response) {
    var quotes_data = response.data[0].quotes;
    var author_name = response.data[0].author;
    console.log(quotes_data + '\n');
    console.log('written by ' + author_name);
  })
  .catch(function (error) {
    console.log(error);
  })