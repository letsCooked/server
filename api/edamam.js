const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.edamam.com/'
})

module.exports = instance