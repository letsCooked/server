const axios = require('axios')

class BoredController {
    static random(req, res, next) {
        axios.get('https://www.boredapi.com/api/activity?type=cooking')
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(next)
    } 
}

module.exports = BoredController