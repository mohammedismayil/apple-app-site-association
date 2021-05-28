const http = require('http');
var fs = require('fs');
var express = require('express');
const basicRouter = require('./routes');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
var aasa = fs.readFileSync(__dirname + '/.well-known/apple-app-site-association');

var wiki = require('./wiki.js');
// app.use(bodyParser.urlencoded({extended: true}));


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
  
//   const msg = 'Hello Node!\n'
//   res.end(msg);

//   res.set('Content-Type', 'application/json');
// });

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });
app.listen(port, function(){
  console.log(`Server running on http://localhost:${port}/`);
})

// app.use('/', express.static(__dirname + '/static'));
// app.use('/', basicRouter);


// ...
// app.use('/wiki', wiki);
app.get('/apple-app-site-association', function(req, res, next) {
  console.log("im called")
  res.set('Content-Type', 'application/json');
  res.status(200).send(aasa);
});
app.get('/', function(req, res){
	res.send('The GET Request on "/" has been handled by the server.');
})