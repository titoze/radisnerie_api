const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ProductController = require('./controllers/product')
const UserController = require('./controllers/user')
const ProductCategoryController = require('./controllers/product_category')
const creditCardController = require('./controllers/credit_card')

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/', (req, res) => res.json({
    message: "Server is started."
}))

// Product Categories Actions
app.get('/api/productcategories', ProductCategoryController.getProductCategory);
app.post('/api/productcategories', ProductCategoryController.addProductCategory);
app.put('/api/productcategories', ProductCategoryController.updateProductCategory);
app.delete('/api/productcategories', ProductCategoryController.deleteProductCategory);

// Product Actions
app.get('/api/products', ProductController.getProduct);
app.post('/api/products', ProductController.addProduct);
app.put('/api/products', ProductController.updateProduct);
app.delete('/api/products', ProductController.deleteProduct);


// User Actions
app.get('/api/users', UserController.getUser);
app.post('/api/users', UserController.addUser);
app.put('/api/users', UserController.updateUser);
app.delete('/api/users', UserController.deleteUser);

// Credit Card Actions
app.get('/api/creditcards', creditCardController.getCreditCard);
app.post('/api/creditcards', creditCardController.addCreditCard);
app.put('/api/creditcards', creditCardController.updateCreditCard);
app.delete('/api/creditcards', creditCardController.deleteCreditCard);


app.get('*', (req, res) => {
    res.status('404')
    res.json({
        message: 'An error occured, check that your URL or Method is correct.'
    })
})

app.listen(3000, () => console.log('serveur démarré'))