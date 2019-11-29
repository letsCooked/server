const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://www.boredapi.com/api'
})

module.exports = instance
