require('dotenv').config()
const express = require('express')
const allPhotoRoutes = require("./routes/photoRoutes.js")
const allUserRoutes = require("./routes/userRoutes.js")
const allFaveRoutes = require("./routes/favoritesRoutes.js")
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use ((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/photos', allPhotoRoutes );
app.use('/api/users', allUserRoutes );
app.use('/api/favorites', allFaveRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the Unsplash API!"})
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})