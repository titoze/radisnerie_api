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