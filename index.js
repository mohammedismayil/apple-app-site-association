const http = require('http');
var fs = require('fs');
const port = process.env.PORT || 3000;
var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.status(200).send(aasa);
  res.set('Content-Type', 'application/json');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});