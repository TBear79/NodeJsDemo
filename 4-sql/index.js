const express = require('express')
const sql = require('mssql')
const argv = require('minimist')(process.argv.slice(2))
const config = require(`./config/${argv.env}`)
const app = express()

app.get('/getCustomers', async (req, res) => {
    const result = await executeQuery(`YOUR SQL HERE`)

    res.json({ rs: result.recordset })
})

app.get('/getCustomer/:email', async (req, res) => {
    const result = await executeQuery(`You SQL HERE '${req.params.email}'`)

    res.json({ rs: result.recordset })
})

async function executeQuery(sqlQuery) {
    const pool = await sql.connect(config.connectionString)
    const request = new sql.Request()

    console.log(sqlQuery)

    const result = await request
        .query(sqlQuery)
        .catch((err) => { console.error('Error occured', err); throw err; })

    sql.close()

    return result;
}

app.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}/`)
});