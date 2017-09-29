const express = require('express');
const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 1337;

app.get('/', function (req, res) {
    req;
    res.send('Hello World!');
});

app.get('/ping/:ts', function (req, res) {
    const { ts } = req.params;
    res.send({ res: 'pong', received: Date.now(), send: ts ? ts : -1 });
});

app.listen(PORT, HOST, function () {
    console.log(`Express Server is listening on ${HOST}:${PORT}`);
});