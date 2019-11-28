const router = require('express').Router()
const user = require('./userRoute')
const bored = require('./boredRoute')

router.use('/user', user)
router.use('/bored', bored)



module.exports = router