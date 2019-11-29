const router = require('express').Router()
const EdamamController = require('../controllers/edamam')
const authentication = require('../middlewares/auth')


router.get('/:recipe', EdamamController.getRecipes)

module.exports = router