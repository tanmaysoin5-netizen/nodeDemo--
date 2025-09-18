var http = require('http');

var fs = require('fs');

http.createServer (function (req, res) {

res writeHead(200, {'Content-Type': 'text/plain'});
// write a file

fs writeFile("demo.txt", "Hello, I am learning Node-js!"
, function (err){

if (err)

res. end("Error writing file");
else
read the file
ts- readFile("demo.txt", "utf8", function(err, data)f
if
(err) {
res. end ("Error reading file");
else
res. end ("File Content: " + data);
}). listen (4000);
console. log ("Server is running at http://localhost:4000");