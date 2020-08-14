const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ProductController = require('./controllers/product')
const UserController = require('./controllers/user')
const ProductCategoryController = require('./controllers/product_category')

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

app.get('/api/products', ProductController.list);

// User Actions
app.get('/api/users', UserController.getUser);
app.post('/api/users', UserController.addUser);
app.put('/api/users', UserController.updateUser);
app.delete('/api/users', UserController.deleteUser);


app.get('*', (req, res) => {
    res.status('404')
    res.json({
        message: 'An error occured, check that your URL or Method is correct.'
    })
})

app.listen(3000, () => console.log('serveur démarré'))