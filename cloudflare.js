var request = require('request');
var cheerio = require('cheerio');

request('https://api.cloudflare.com/', (err, res) => {
  var $ = cheerio.load(res.body);

  $('article').each(function (err, elem) {
      var title = $(this).find('.mod-title').text();
      var code = $(this).find('.CodeMirror');


      code.each(function (err, elem) {
        code = $(this).find('pre').text();

        if ((code.startsWith('curl -X') || code.startsWith('curl -I')) || code.startsWith('curl -H')) {
          console.log(title + '\n');
          console.log(code + '\n\n\n');
        }
      })
  });
});
