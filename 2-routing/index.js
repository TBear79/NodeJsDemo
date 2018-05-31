const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;


app.get('/', (req, res) => {
    res.end('Hello world!');
})

app.get('/getCustomers', (req, res) => {
    res.json({
        top: req.query.top,
        customers: []
    });
})

app.get('/getCustomer/:email', (req, res) => {
    res.json({
        requested: req.params.email
    });
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});