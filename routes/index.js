const router = require('express').Router()
const user = require('./userRoute')
const weather = require('./weatherRoute')
const bored = require('./boredRoute')
const edamam = require('./edamamRoute')


router.use('/user', user)
router.use('/weather', weather)
router.use('/cook', bored)
router.use('/recipe', edamam)



module.exports = router