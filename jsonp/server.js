const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (~req.url.indexOf('?callback')) { // 简单处理 JSONP 跨域的时候
    const obj = {
      "text": 'jsonp',
    }
    const callback = req.url.split('callback=')[1]
    const json = JSON.stringify(obj)
    const build = callback + `(${json})`
    res.setHeader('Content-Type', 'text/plain')
    res.end(build) // 这里最终返回前端的是相当于调用函数 callback({json})
  } else { // 非跨域的时候
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
