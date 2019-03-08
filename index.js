const express = require('express');

const app = express();

app.get('/admin/isdisabled.aspx', (req, res) => {
    console.log(`isDisabled :: Hash: ${req.query['h']}\n`);
    res.status(200).end("ERROR");
});

app.get('/admin/authenticate.aspx', (req, res) => {
    console.log(`Activation :: Hash: ${req.query['h']}\nVersion: ${req.query['v']}\nOS: ${decodeURIComponent(req.query['o'])}\n`);
    res.status(200).end("SUCCESS");
});

app.use((req, res) => {
    console.log(`404 :: ${req.url}`);
    res.status(404).end();
});

app.listen(80);