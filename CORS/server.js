const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers.cookie)
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3001') // 必填：接受域的请求
  res.setHeader('Access-Control-Allow-Credentials', true) // ② 选填：是否允许浏览器传 cookie 到服务端，只能设置为 true
  res.setHeader('Set-Cookie', ['type=muyy'])
  res.setHeader('Access-Control-Allow-Methods', 'PUT') // ③
  res.end('date from cors')
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
