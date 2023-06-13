const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title:{
        type: String,
        required: true
    },
    price:{
        type: String,
    },
    color:{
        type: String,
    },
    shortDescription:{
        type: String,
    },
    description:{
        type: String,
    },
    brand:{
        type: String,
    },
    url:{
        type: String,
    },
    image:{
        type: String,
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;