const axios = require('axios')

class EdamamController{
    static getRecipes = (req,res,next) => {
        axios.get(`https://api.edamam.com/search?q=${req.params.recipe}&app_id=3f836cdc&app_key=b71525fc53bf070d830fd1fae60e5362`)
        .then(recipe=>res.status(200).json(recipe.data))
        .catch(error=>next(error))
    }
}

module.exports = EdamamController