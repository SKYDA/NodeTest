var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var fs = require("fs");
var app = express();
app.listen(process.env.PORT || 5000);

app.get('/', function (req, res, next) {
    superagent.get('http://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=10000&page_start=0')
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            fs.writeFile("./file.txt", sres.text, function (error) {
            if (error) {
              
            } else {
               
            }
        });
            var items = [];
           // $(".list .item").each(function(i, element){
           //      console.log($(this).attr("href"));
           //      items.push({
           //          'href' : $(element).attr('href'),
           //          'title' : $(element).find("img").attr('alt'),
           //          'src':$(element).find("img").attr('src')
           //      });
           //  });
           //  res.send(items);
           res.send(sres.text);
        });
});