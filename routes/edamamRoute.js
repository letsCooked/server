const router = require('express').Router()
const EdamamController = require('../controllers/edamam')
const authentication = require('../middlewares/auth')


router.get('/:recipe', authentication, EdamamController.getRecipes)

module.exports = router