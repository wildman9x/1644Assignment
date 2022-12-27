require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const hbs = require('hbs')
const productRoutes = require('./routes/product.routes')
const { route } = require('./routes/product.routes')
const router = express.Router()
const path = require('path')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '/public')));

app.use('/product', productRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)