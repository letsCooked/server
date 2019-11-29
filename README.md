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
 
 **Get Cooking Activity**
----
  Returns json data about single activity.

* **URL**

  /cook

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
            "activity": "Cook something together with someone",
            "accessibility": 0.8,
            "type": "cooking",
            "participants": 2,
            "price": 0.3,
            "link": "",
            "key": "1799120"
        }
    ```
 
* **Sample Call:**

  ```javascript
    $.ajax({
        url: `<baseURL>/cook`,
        method: `post`
    })
    .done(result => {
        console.log(result)
    })
    .fail(err => {
        console.log(err)
    })
  ```


**Show Recipe**
----
  Returns json data about recipe.

* **URL**

  /recipe/:recipe

* **Method:**

  `GET`

* **Data Params**

  recipe: STRING  

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 
    ```javascript
        {
    "q": "ice cream",
    "from": 0,
    "to": 10,
    "more": true,
    "count": 27263,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7c5a5ced83523b4dc49adbc78471cc38",
                "label": "Rainbow Ice Cream Pops Recipe",
                "image": "https://www.edamam.com/web-img/68e/68ef6ac70cb7ffbb08bf43a4a55be4e3.jpg",
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2012/07/rainbow-ice-cream-pops-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/rainbow-ice-cream-pops-recipe-7c5a5ced83523b4dc49adbc78471cc38/ice+cream",
                "yield": 4,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 tablespoons pink-tinted ice cream, softened",
                    "3 tablespoons orange-tinted ice cream, softened",
                    "3 tablespoons yellow-tinted ice cream, softened",
                    "3 tablespoons green-tinted ice cream, softened",
                    "3 tablespoons blue-tinted ice cream, softened",
                    "3 tablespoons violet-tinted ice cream, softened"
                ],
                "calories": 307.3949999948028,
                "totalWeight": 148.4999999974893,
                "totalTime": 130,
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 307.3949999948028,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 16.334999999723824,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 10.083149999829526,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 4.408964999925457,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 0.6712199999886518,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 35.04599999940748,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.0394999999824253,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 31.51169999946723,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 31.51169999946723,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 5.197499999912127,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 65.3399999988953,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 118.79999999799142,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 190.07999999678628,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 20.789999999648508,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 295.51499999500373,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 0.13364999999774038,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 1.0246499999826761,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 155.92499999736378,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 175.2299999970374,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.8909999999849358,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.06088499999897061,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.3563999999939743,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.1722599999970876,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.07127999999879488,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 7.424999999874464,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 7.424999999874464,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.5791499999902083,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 11.879999999799143,
                        "unit": "IU"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.4454999999924679,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.4454999999924679,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 90.58499999846848,
                        "unit": "g"
                    }
                },
            "bookmarked": false,
            "bought": false
        }
    ```
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
    **Content:**  `{message: you have to login first}`
    

* **Sample Call:**

  ```javascript
    $.ajax({
        url: `<baseURL>/recipe/make ice cream`,
        method: `get`
    })
    .done(result => {
        console.log(result)
    })
    .fail(err => {
        console.log(err)
    })
  ```
