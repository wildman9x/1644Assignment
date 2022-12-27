const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

    name: {
        type: String,
        required: 'Product name is required',
        trim: true
    },
    price: {
        type: Number,
        required: 'Product price is required',
        trim: true
    },
    description: {
        type: String,
        required: 'Product description is required',
        trim: true
    },
    image: {
        type: String,
        required: 'Product image is required',
        trim: true
    },
    category: {
        type: String,
        required: 'Product category is required',
        trim: true
    },
    quantity: {
        type: Number,
        required: 'Product quantity is required',
        trim: true
    }
})

module.exports = Product = mongoose.model('Product', productSchema)