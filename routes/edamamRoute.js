const router = require('express').Router()
const edamamController = require('../controllers/edamam')

router.get('/:recipe',edamamController.getRecipes)

module.exports = router