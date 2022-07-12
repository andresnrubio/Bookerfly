require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;


//* Routes call
app.use ("/api", require("./routes"))

app.listen(PORT, () =>{
    console.log(`Server ON in port: ${PORT}`)
})
dbConnect()