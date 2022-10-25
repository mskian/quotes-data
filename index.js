const axios = require('axios');
const qs = require('querystring');
require('dotenv').config();

axios.get(process.env.DATA_SOURCE)
  .then(function (response) {
    var quotes = response.data.content;
    var author = response.data.author;
    console.log(quotes + '\n');
    console.log('written by ' + author);
    gotifyMessage(author, quotes);
  })
  .catch(function (error) {
    console.log(error);
  })

  function gotifyMessage(author, hello) {
    var API_URL = process.env.API_SOURCE;
    if (API_URL) {
        var url = API_URL
        var authorinfo = author || 'unknown';
        var bodyFormData = {
            'author': authorinfo,
            'quotestext': hello
        };
        axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: url,
                data: qs.stringify(bodyFormData),
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
}