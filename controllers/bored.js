const Bored = require('../api/bored')

class BoredController {
    static random(req, res, next) {
        Bored({
            url: `/activity?type=cooking`
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = BoredController