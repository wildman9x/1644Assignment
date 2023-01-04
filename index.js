require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const hbs = require('hbs')
const productRoutes = require('./Routes/product.routes')
const { route } = require('./Routes/product.routes')
const router = express.Router()
const path = require('path')
const fs = require('fs')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

var partialDir = path.join(__dirname, '/Views')
var filename = fs.readdirSync(partialDir)
filename.forEach(function (file) {
    var matches = /^([^.]+).hbs$/.exec(file)
    if (!matches) {
        return
    }
    var name = matches[1]
    var template = fs.readFileSync(partialDir + '/' + file, 'utf8')
    hbs.registerPartial(name, template)
})
hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

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