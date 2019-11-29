# LETS COOK - Server

**Register User**
----
  Returns json data about newly register user.

* **URL**

  /user/register

* **Method:**

  `POST`

* **Data Params**

  &nbsp; name: STRING
  &nbsp; email: STRING
  &nbsp; password: STRING

* **Success Response:**

  * **Code:** 201 <br />
    ```javascript
        {
            "isGoogle": false,
            "_id": "5de0ae689fab012045e0948e",
            "name": "bbb",
            "email": "bbb@mail.com",
            "password": "$2b$10$6wmSQU41NW7iC1AvWmNhtO4atYb1QX5oTUDy0QdvWNFBStTVWQIIq",
            "__v": 0
        }
    ```
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    ```javascript
    {
        "message": [
            "Please enter your name.",
            "Please enter your email address.",
            "Email already registered"
            "Please enter your password."
        ]
    }
    ```

* **Sample Call:**

  ```javascript
    $.ajax({
        url: `<baseURL>/user/register`,
        method: `post`,
        data: {
            name: Ujang Tarigan,
            email: ujangtarigan@mail.com, 
            password: `12345`
        }
    })
    .done(result => {
        console.log(result)
    })
    .fail(err => {
        console.log(err)
    })
  ```

<br>
**Login User**
----
  Returns json data about a single user.

* **URL**

  /users/login

* **Method:**

  `POST`

* **Data Params**

  email: STRING
  password: STRING

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmJiIiwiZW1haWwiOiJiYmJAbWFpbC5jb20iLCJpZCI6IjVkZTBhZTY4OWZhYjAxMjA0NWUwOTQ4ZSIsImlhdCI6MTU3NTAwNzE3NiwiZXhwIjoxNTc1MDkzNTc2fQ.1YSl0xcpDT_HxPUPjgp5I7HPH4Liezt-xFwFPROuQ24",
        "name": "bbb",
        "email": "bbb@mail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
    **Content:** 
    ```javascript
    {
        "message": "Invalid email or password."
    }
    ```

* **Sample Call:**

  ```javascript
    $.ajax({
        url: `<baseURL>/user/login`,
        method: `post`,
        data: {
            email: akupadamu@mail.com
            password: tiadadustadiantarakita
        }
    })
  ```

<br>
**Sign In Google User**
----
  Returns json data about a single user.

* **URL**

  /user/google

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 

* **Sample Call:**

  ```javascript
    $.ajax({
        url: `${baseURL}/user/google`,
        method: 'post',
        data: {
        token: id_token
        }
    })
    .done(({token, name}) => {
        console.log(token, name)
    })
  ```
<br>
**Display Weather**
----
  Returns json data about current weather.

* **URL**

  /weather

* **Method:**

  `POST`

* **Data Params**

  city: STRING

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
            "data": [
                {
                    "rh": 62,
                    "pod": "d",
                    "lon": 106.84513,
                    "pres": 1007.1,
                    "timezone": "Asia/Jakarta",
                    "ob_time": "2019-11-29 06:00",
                    "country_code": "ID",
                    "clouds": 98,
                    "ts": 1575007200,
                    "solar_rad": 253.3,
                    "state_code": "04",
                    "city_name": "Jakarta",
                    "wind_spd": 5.7,
                    "last_ob_time": "2019-11-29T06:00:00",
                    "wind_cdir_full": "north-northeast",
                    "wind_cdir": "NNE",
                    "slp": 1008,
                    "vis": 5,
                    "h_angle": 30,
                    "sunset": "10:55",
                    "dni": 968.28,
                    "dewpt": 24.8,
                    "snow": 0,
                    "uv": 7.11128,
                    "precip": 0,
                    "wind_dir": 20,
                    "sunrise": "22:28",
                    "ghi": 1000.7,
                    "dhi": 128.43,
                    "aqi": 156,
                    "lat": -6.21462,
                    "weather": {
                        "icon": "c04d",
                        "code": "804",
                        "description": "Overcast clouds"
                    },
                    "datetime": "2019-11-29:06",
                    "temp": 33,
                    "station": "WIII",
                    "elev_angle": 65.49,
                    "app_temp": 40.3
                }
            ],
            "count": 1
        }
    ```
 
* **Error Response:**

  * **Code:** 204 No Content <br />

* **Sample Call:**

  ```javascript
    $.ajax({
        url: `<baseURL>/weather`,
        method: `post`,
        data: {
            city: Jakarta
        }
    })
  ```
