const mongoose = require('mongoose')
const { Schema } = mongoose
const { hash } = require('../helpers/bcrypt')

const weatherSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    icon: {
        type: String
    },
    city_name: {
        type: String
    },
    country_code: {
        type: String
    }
    ,
    timezone: {
        type: String
    },
    temperature: {
        type: String
    },
    datetime: {
        type: String
    }
})

const Weather = mongoose.model('Weather', weatherSchema)

module.exports = Weather