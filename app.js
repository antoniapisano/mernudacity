require('dotenv').config()
const express = require('express')
const allPhotoRoutes = require("./routes/photoRoutes.js")

const app = express()

app.use(express.json())

app.use ((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api', allPhotoRoutes );

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the Unsplash API!"})
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})