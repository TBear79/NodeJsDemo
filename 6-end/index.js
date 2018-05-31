const http = require('http');
var QRCode = require('qrcode')


const hostname = '127.0.0.1';
const port = 3000;
const demo = 'https://github.com/TBear79/NodeJsDemo'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    QRCode.toDataURL(demo, function (err, url) {
        res.end(`<html><body><div>THANKS for listening! <br/><br/><br/><a href="${demo}">${demo}</a></div><br /><img src="${url}" /></body></html>`);
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});