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