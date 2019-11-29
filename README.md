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
            "description": "Overcast clouds",
            "icon": "c04d",
            "city_name": "Bandung",
            "country_code": "ID",
            "timezone": "Asia/Jakarta",
            "temperature": 29.2,
            "datetime": "2019-11-29:07"
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
