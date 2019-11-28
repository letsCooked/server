const router = require('express').Router()
const user = require('./userRoute')
const bored = require('./boredRoute')
const weather = require('./weatherRoute')

router.use('/user', user)
router.use('/bored', bored)

router.use('/user', user)
router.use('/weather', weather)

module.exports = router