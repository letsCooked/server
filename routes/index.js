const router = require('express').Router()
const user = require('./userRoute')
const edamam = require('./edamam')

router.use('/user', user)
router.use('/edamam',edamam)



module.exports = router