
const express = require('express')
const app = express()
const port = 3000
const request = require('request')
const cheerio = require('cheerio')
const { response } = require('express')

app.get('/', (req, res) => {
  
  request('https://www.wilsonamplifiers.com/wilson400-black-coaxial-cable/', (error, response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const formField = $('.form-field')

    $('.form-select').each((i, el) => {
      const item = $(el).text();

      console.log(item);
      
    });
      

  }
 res.send('hello') 
});

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




