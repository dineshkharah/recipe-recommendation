require("dotenv").config()
const mongoose = require('mongoose');
const Recipe = require('./server/models/Recipe')

const product = require('./product.json')


const start = async () => {
    await mongoose.connect(`${process.env.MONGOURI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

    try {
        // await Recipe.deleteMany()
        await Recipe.create(product)
        console.log("sucess")
    } catch (error) {
        console.log(error)

    }

}

start()