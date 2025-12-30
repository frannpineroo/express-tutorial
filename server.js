const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}));

app.use(express.json())

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

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const products = [
        {id: 1, name: 'Computadora', price: 800},
        {id: 2, name: 'Teléfono', price: 500},
        {id: 3, name: 'Tablet', price: 300}
    ]

    const requestedProduct = products.find((product) => product.id === id);
    res.json(requestedProduct);
});

app.get('/message', (req, res) => {
    res.json({ message: 'Hola desde Express backend' });
});

app.post('/message', (req, res) => {
    const { name, message} = req.body;

    console.log(`Mensaje recibido de ${name}: ${message}`);
    res.json({ message: 'Gracias por tu mensaje' });
});

app.listen(3000, () => {
    console.log('El servidor está corriendo en el puerto 3000');
});