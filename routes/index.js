const router = require('express').Router()
const user = require('./userRoute')
const weather = require('./weatherRoute')

console.log(`masuk`);
router.use('/user', user)
router.use('/weather', weather)


module.exports = router