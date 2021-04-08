// https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello');
});

const port = 9000;
const hostname = '127.0.0.1';

server.listen(
  port,
  hostname,
  () => {
    console.log(`Server is up! Hostname: ${hostname}. Port ${port}`);
  }
);
