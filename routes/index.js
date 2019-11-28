const router = require('express').Router()
const user = require('./userRoute')
const edamam = require('./edamam')

router.use('/edamam',edamam)

const bored = require('./boredRoute')
const weather = require('./weatherRoute')

router.use('/bored', bored)


router.use('/user', user)
router.use('/weather', weather)

module.exports = router