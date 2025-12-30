const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde Express!');
});

app.get('/about', (req, res) => {
    res.send('Acerca de nosotros');
});

app.get('/contact', (req, res) => {
    res.send('Contacto');
});

app.get('/products', (req, res) => {
    res.json([
        {id: 1, name: 'Computadora', price: 800},
        {id: 2, name: 'Teléfono', price: 500},
        {id: 3, name: 'Tablet', price: 300}
    ])
});

app.listen(3000, () => {
    console.log('El servidor está corriendo en el puerto 3000');
});