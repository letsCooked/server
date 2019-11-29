const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0'
})

module.exports = instance