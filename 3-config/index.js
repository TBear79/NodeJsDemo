const express = require('express')
const app = express()
const argv = require('minimist')(process.argv.slice(2))
const config = require(`./config/${argv.env}`)

app.get('/', (req, res) => {
    res.end(`Loaded configuration: ${config.environment}`);
})

app.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});