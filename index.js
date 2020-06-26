const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/', (req, res) => res.json({message: "Server is started."}))
app.get('*', (req, res) => {
    res.status('404')
    res.json({message: 'An error occured, check that your URL or Method is correct.'})
})

app.listen(3000, () => console.log('serveur démarré'))