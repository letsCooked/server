const router = require('express').Router()
const BoredController = require('../controllers/bored')
const authentication = require('../middlewares/auth')


router.get('/', BoredController.random)

module.exports = router