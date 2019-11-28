const Weather = require('../api/weather')

class WeatherC {

    static getCurrentWeather(req, res, next) {
        let city = req.body.city
        Weather({
            url: `/current?city=${city}&key=${process.env.API_KEY}`
        })
            .then(({ data }) => {
                let weather = data
                if (data.length == 0) {
                    next({ status: 400, message: "Location not found" })
                }
                else {
                    let w = weather.data[0]
                    let weatherData = {
                        description: w.weather.description,
                        icon: w.weather.icon,
                        city_name: w.city_name,
                        country_code: w.country_code,
                        timezone: w.timezone,
                        temperature: w.temp,
                        datetime: w.datetime
                    }
                    res.status(200).json(weatherData)
                }
            })
            .catch(next)
    }
}

module.exports = WeatherC