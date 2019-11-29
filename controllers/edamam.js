const Edamam = require('../api/edamam')

class EdamamController {
    static getRecipes(req, res, next) {
        let recipe = req.params.recipe
        if (recipe) {
            Edamam({
                url: `search?q=${req.params.recipe}&app_id=3f836cdc&app_key=b71525fc53bf070d830fd1fae60e5362`
            })
                .then(recipe => {
                    res.status(200).json(recipe.data)
                })
                .catch(next)
        } else next({ status: 404, message: 'not found' })
    }
}

module.exports = EdamamController