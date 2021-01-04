const axios = require('axios');
require('dotenv').config();

var API_URL = process.env.GET_DATA;

  if (API_URL) {
      var url = API_URL
      axios({
              method: 'GET',
              url: url
          })
          .then(function(response) {
              console.log(response.data);
          })
          .catch(function(error) {
              if (!error.response) {
                  console.log('API URL is Missing');
              } else {
                  console.log('Something Went Wrong - Enter the Correct API URL');
              }
          });
  } else {
      console.log('Config Error: API URL is Missing');
  }