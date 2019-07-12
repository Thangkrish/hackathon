var http=require("http");
var url=require("url");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var querystring=require("querystring");
function onRequest(request,response)
 {
     var path=url.parse(request.url).pathname;
     var query=url.parse(request.url).query;
     var txt=querystring.parse(query)["textarea"];
     var docx = sentiment.analyze(txt);
     var str = txt.nouns().toPlural().out('text')
     console.log(docx);
     console.log(str);
     response.write(txt);
     response.end();
 }
 http.createServer(onRequest).listen(5555);
 console.log("server is started");
