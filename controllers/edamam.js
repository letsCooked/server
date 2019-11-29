const Edamam = require('../api/edamam')

class EdamamController {
    static getRecipes(req, res, next) {
        let recipe = req.params.recipe
        if (recipe) {
            Edamam({
                url: `search?q=${req.params.recipe}&app_id=926039ee&app_key=a3fd178991cf09316d3d8fd0b2e2d48d`
            })
                .then(recipe => {
                    res.status(200).json(recipe.data)
                })
                .catch(next)
        } else next({ status: 404, message: 'not found' })
    }
}

module.exports = EdamamController