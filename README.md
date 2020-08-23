# Radisnerie API Documentation
API NodeJS pour back-office et application mobile Radis'nerie.

## Product Category
#### Method GET
To get all product categories visit [https://radisnerie-api-production.herokuapp.com/api/productcategories?id=all](https://radisnerie-api-production.herokuapp.com/api/productcategories?id=all).


To get a particular product category visit [https://radisnerie-api-production.herokuapp.com/api/productcategories?id=1](https://radisnerie-api-production.herokuapp.com/api/productcategories?id=1).

#### Method POST
To add a new product category set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/productcategories](https://radisnerie-api-production.herokuapp.com/api/productcategories) with this body content :

```
{
        "name": "something"
}
```

#### Method PUT
To update a product category set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/productcategories](https://radisnerie-api-production.herokuapp.com/api/productcategories) with this body content :
```
{
        "id" : 5,
        "name": "something"
}
```

#### Method DELETE
To delete a product category set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/productcategories](https://radisnerie-api-production.herokuapp.com/api/productcategories) with this body content :
```
{
        "id" : 5
}
```


## Product
#### Method GET
To get all product categories visit [https://radisnerie-api-production.herokuapp.com/api/products?id=all](https://radisnerie-api-production.herokuapp.com/api/products?id=all).


To get a particular product category visit [https://radisnerie-api-production.herokuapp.com/api/products?id=1](https://radisnerie-api-production.herokuapp.com/api/products?id=1).

#### Method POST
To add a new product set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/products](https://radisnerie-api-production.herokuapp.com/api/products) with this body content :

```
{
        "name": "Something",
        "description": "Something else",
        "price": 2,
        "image": "https://myurl.jpg",
        "stock": 50,
        "sellable": true,
        "productCategoryId": 1
}
```


#### Method PUT
To update a product set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/products](https://radisnerie-api-production.herokuapp.com/api/products) with this body content :
```
{
        "id" : 5,
        "name": "Something Different",
        "description": "Something else",
        "price": 2,
        "image": "https://myurl.jpg",
        "stock": 50,
        "sellable": true,
        "productCategoryId": 1
}
```


#### Method DELETE
To delete a product set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/products](https://radisnerie-api-production.herokuapp.com/api/products) with this body content :
```
{
        "id" : 5
}
```

## Recipe
#### Method GET
To get all recipes visit [http://radisnerie-api-production.herokuapp.com/api/recipes?id=all](http://radisnerie-api-production.herokuapp.com/api/recipes?id=all).


To get a particular recipe visit [http://radisnerie-api-production.herokuapp.com/api/recipes?id=1](http://radisnerie-api-production.herokuapp.com/api/recipes?id=1).

To filter recipe by difficulty visit [https://radisnerie-api-production.herokuapp.com/api/recipes?difficulty=easy](https://radisnerie-api-production.herokuapp.com/api/recipes?difficulty=easy).

To filter recipe by products visit [http://localhost:3000/api/recipes?products=poivron,courgette](http://localhost:3000/api/recipes?products=poivron,courgette).

To filter recipe by tags visit [https://radisnerie-api-production.herokuapp.com/api/recipes?tags=hiver,nord](https://radisnerie-api-production.herokuapp.com/api/recipes?tags=hiver,nord).


#### Method POST
To add a new product set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/recipes](https://radisnerie-api-production.herokuapp.com/api/recipes) with this body content :

```
{
        "name": "Le test de la mort qui tue",
        "caloric": "575",
        "realisationTime": "60",
        "difficulty": "medium",
        "products": [
            {
                "id": 2,
                "unity": "g",
                "quantity": 100
            },
            {
                "id": 3,
                "unity": "g",
                "quantity": 175
            },
            {
                "id": 4,
                "unity": "g",
                "quantity": 175
            }
        ],
        "tags": [
            "Légumes",
            "Provence"
        ],
        "steps": [
            {
                "order": 1,
                "details": "Couper les légumes en rondelles."
            },
            {
                "order": 2,
                "details": "Sort ta poelle et fais moi cuire tout ça."
            }
        ]
}
```


#### Method PUT
To update a product set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/recipes](https://radisnerie-api-production.herokuapp.com/api/recipes) with this body content :
```
{
        "id": 3,
        "name": "Le test de la mort",
        "caloric": "575",
        "realisationTime": "60",
        "difficulty": "medium",
        "products": [
            {
                "id": 2,
                "unity": "g",
                "quantity": 100
            },
            {
                "id": 3,
                "unity": "g",
                "quantity": 175
            },
            {
                "id": 4,
                "unity": "g",
                "quantity": 175
            }
        ],
        "tags": [
            "Légumes",
            "Provence"
        ],
        "steps": [
            {
                "order": 1,
                "details": "Couper les légumes en rondelles."
            },
            {
                "order": 2,
                "details": "Sort ta poelle et fais moi cuire tout ça."
            }
        ]
}
```


#### Method DELETE
To delete a product set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/recipes](https://radisnerie-api-production.herokuapp.com/api/recipes) with this body content :
```
{
        "id" : 5
}
```

## Basket
#### Method GET
To get all baskets visit [https://radisnerie-api-production.herokuapp.com/api/baskets?id=all](https://radisnerie-api-production.herokuapp.com/api/baskets?id=all).


To get a particular basket visit [https://radisnerie-api-production.herokuapp.com/api/baskets?id=1](https://radisnerie-api-production.herokuapp.com/api/baskets?id=1).

#### Method POST
To add a new product set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/baskets](https://radisnerie-api-production.herokuapp.com/api/baskets) with this body content :

```
{
        "name": "Ton panier préféré",
        "price": 20,
        "description": "Découvrez le panier qui réchauffe vos papilles !",
        "image": "http://www.tonimage.fr/panier.jpg",
        "products": [1,2,3,4]
}
```


#### Method PUT
To update a product set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/baskets](https://radisnerie-api-production.herokuapp.com/api/baskets) with this body content :
```
{
        "id": 1,
        "name": "Ton panier préféré",
        "price": 20,
        "description": "Découvrez le panier qui réchauffe vos papilles !",
        "image": "http://www.tonimage.fr/panier.jpg",
        "products": [1,2,3,4]
}
```


#### Method DELETE
To delete a product set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/baskets](https://radisnerie-api-production.herokuapp.com/api/baskets) with this body content :
```
{
        "id" : 5
}
```

## Command
#### Method GET
To get all commands visit [https://radisnerie-api-production.herokuapp.com/api/commands?id=all](https://radisnerie-api-production.herokuapp.com/api/commands?id=all).


To get a particular command visit [https://radisnerie-api-production.herokuapp.com/api/commands?id=1](https://radisnerie-api-production.herokuapp.com/api/commands?id=1).

To get command of particular user id visit [https://radisnerie-api-production.herokuapp.com/api/commands?userId=2](https://radisnerie-api-production.herokuapp.com/api/commands?userId=2).

To get last command of particular user id visit [https://radisnerie-api-production.herokuapp.com/api/commands?userId=2&lastCommand=true](https://radisnerie-api-production.herokuapp.com/api/commands?userId=2&lastCommand=true).

#### Method POST
To add a new command set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/commands](https://radisnerie-api-production.herokuapp.com/api/commands) with this body content :

```
{
        "userId": 1,
        "price": 20,
        "address": "82 Rue du poisson rouge",
        "additional_address": "Appartement d05",
        "city": "Lomme",
        "zip": "59001",
        "deliveryDate": "2020-08-23T12:41:47.464Z (NEW DATE())",
        "baskets": [1]
}
```


#### Method PUT
To update a product set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/baskets](https://radisnerie-api-production.herokuapp.com/api/baskets) with this body content (only the delivery status can be updated, id is the reference of the command) :
```
{
        "id": 4,
        "deliveryStatus": "SEND"
}
```


#### Method DELETE
There's no delete method for commands.

## Retailer
#### Method GET
To get all baskets visit [https://radisnerie-api-production.herokuapp.com/api/retailers?id=all](https://radisnerie-api-production.herokuapp.com/api/retailers?id=all).


To get a particular basket visit [https://radisnerie-api-production.herokuapp.com/api/retailers?id=1](https://radisnerie-api-production.herokuapp.com/api/retailers?id=1).

#### Method POST
To add a new retailer set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/retailers](https://radisnerie-api-production.herokuapp.com/api/retailers) with this body content :

```
{
        "name": "La ferme du Nord",
        "owner_firstname": "Jean",
        "owner_lastname": "Ferme",
        "city": "Lomme",
        "zip": "59160",
        "address": "Rue de la pature",
        "additional_address": null,
        "phone": "+33658624512",
        "email": "lafermedunord@gmail.com"
}
```


#### Method PUT
To update a retailer set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/retailers](https://radisnerie-api-production.herokuapp.com/api/retailers) with this body content :
```
{
        "id": 1,
        "name": "La ferme du Nord",
        "owner_firstname": "Jean",
        "owner_lastname": "Ferme",
        "city": "Lomme",
        "zip": "59160",
        "address": "Rue de la pature",
        "additional_address": null,
        "phone": "+33658624512",
        "email": "lafermedunord@gmail.com"
}
```


#### Method DELETE
To delete a retailer set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/retailers](https://radisnerie-api-production.herokuapp.com/api/retailers) with this body content :
```
{
        "id" : 5
}
```

## Delivery
#### Method GET
To get all deliveries visit [https://radisnerie-api-production.herokuapp.com/api/deliveries?id=all](https://radisnerie-api-production.herokuapp.com/api/deliveries?id=all).


To get a particular delivery visit [https://radisnerie-api-production.herokuapp.com/api/deliveries?id=1](https://radisnerie-api-production.herokuapp.com/api/deliveries?id=1).

To get a particular delivery visit [https://radisnerie-api-production.herokuapp.com/api/deliveries?id=1](https://radisnerie-api-production.herokuapp.com/api/deliveries?id=1).

To get a particular delivery  by retailerId visit [https://radisnerie-api-production.herokuapp.com/api/deliveries?retailerId=1](https://radisnerie-api-production.herokuapp.com/api/deliveries?retailerId=1).

#### Method POST
To add a new delivery set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/deliveries](https://radisnerie-api-production.herokuapp.com/api/deliveries) with this body content :

```
{
        "retailerId": 2,
        "price": 100,
        "products": [
            {
                "quantity": 100,
                "id": 1
            },
            {
                "quantity": 50,
                "id": 3
            },
            {
                "quantity": 20,
                "id": 2
            }
        ]
    }
```


#### Method PUT
To update a delivery set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/deliveries](https://radisnerie-api-production.herokuapp.com/api/deliveries) with this body content :
```
{
        "id": 1,
        "retailerId": 2,
        "price": 100,
        "products": [
            {
                "quantity": 10,
                "id": 1
            },
            {
                "quantity": 50,
                "id": 3
            },
            {
                "quantity": 20,
                "id": 2
            }
        ]
}
```


#### Method DELETE
To delete a delivery set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/retailers](https://radisnerie-api-production.herokuapp.com/api/retailers) with this body content :
```
{
        "id" : 5
}
```

## User
#### Method GET
To get all users visit [https://radisnerie-api-production.herokuapp.com/api/users?id=all](https://radisnerie-api-production.herokuapp.com/api/users?id=all).

To get a particular user visit [https://radisnerie-api-production.herokuapp.com/api/users?id=1](https://radisnerie-api-production.herokuapp.com/api/users?id=1).

#### Method POST
To add a new user set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/users](https://radisnerie-api-production.herokuapp.com/api/users) with this body content :

```
{
        "firstname": "Super",
        "lastname": "Admin",
        "email": "admin2@rasdinerie.com",
        "address": "1 rue victor hugo",
        "additional_address": null,
        "city": "Lille",
        "zip": "59000",
        "password": "password"
}
```


#### Method PUT
To update a user set a PUT request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/users](https://radisnerie-api-production.herokuapp.com/api/users) with this body content :
```
{
        "id": 1,
        "firstname": "Super",
        "lastname": "Admin",
        "email": "admin2@rasdinerie.com",
        "address": "1 rue victor hugo",
        "additional_address": null,
        "city": "Lille",
        "zip": "59000",
        "password": "password",
        "is_premium": true
}
```

#### Method DELETE
To delete a user set a POST request to this url &rarr; [https://radisnerie-api-production.herokuapp.com/api/users](https://radisnerie-api-production.herokuapp.com/api/users) with this body content :
```
{
        "id" : 5
}
```