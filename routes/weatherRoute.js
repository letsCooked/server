
const router = require('express').Router()
const WeatherC = require('../controllers/weather')
const authentication = require('../middlewares/auth')

router.post('/', WeatherC.getCurrentWeather)

module.exports = router