import dotenv from 'dotenv'
dotenv.config()

// Simple Express Server
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",function(req,res) {
    res.send("Hello World")
})


const port = process.env.PORT || 4000
app.listen(port,function() {
    console.log(`Server is running on port ${port}`)
})