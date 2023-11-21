const express = require("express")

const app = express()

const port = process.env.prot || 5000;

app.listen(port, () => {
    console.log("server started")
})

app.get("/", (req, res) => {
    const signature = req?.headers['x-pyrus-sig']
    console.log(signature)
    res.send("hello world")
    // const body = req.data
    // const signature = req.headers['x-pyrus-sig']
    // const secret = "9Fuq3kaTj8BeugXJb2BuVsH~Rh-~tSXp0U~5zGNcbym1FEawcxLeFxsHs9oa1gcuwD5vMmQi-SwjXBhRsqjcsQNJty1qq9LU"
    // const data = JSON.parse(body)
    // console.log(data)
})