var request = require('request');
var cheerio = require('cheerio');

request('https://developers.digitalocean.com/documentation/v2/', (err, res) => {
  var $ = cheerio.load(res.body);

  $('.block').each(function (err, elem) {
      var title = $(this).find('h4').text();
      var code = $(this).find('code').text();

      if ((code.startsWith('curl -X') || code.startsWith('curl -I')) || code.startsWith('curl -H')) {
        console.log(title + '\n');
        console.log(code + '\n\n\n');
      }
  });
});
