const router = require('express').Router()
const BoredController = require('../controllers/bored')

router.get('/', BoredController.random)

module.exports = router