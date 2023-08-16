const http = require('node:http');
const server = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('task');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3000/');
});
