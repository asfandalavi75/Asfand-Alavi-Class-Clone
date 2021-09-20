const http = require('http'); //try to use constants, not variables (where ever possible). try 'let' first for a smaller scale variable, then 'var'
//ctrl+c in terminal to stop server running.
const hostname = '127.0.0.1'; // '127.0.0.1' is a loopback IP address.
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});