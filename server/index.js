// const { write } = require('fs');
// const http = require('http'); //try to use constants, not variables (where ever possible). try 'let' first for a smaller scale variable, then 'var'
// //ctrl+c in terminal to stop server running.
// const hostname = '127.0.0.1'; // '127.0.0.1' is a loopback IP address.
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
// //  res.write("Going");
// //  for(let index =0; index < 30; index++)
// //  {
// //    res.write(".");
// //    var waitTill = new Date(new Date().getTime()+);
// //  }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


/////------------------------------------------EXPRESS

const express = require('express')
const app = express()
const port = 3000

app
.get('/', (req, res) => {
  res.send('Hello World!')
})

.get('/newpaltz', (req, res) => {
  res.send('Hello New Paltz!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})