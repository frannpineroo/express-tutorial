const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'Computadora', price: 800},
        {id: 2, name: 'Teléfono', price: 500},
        {id: 3, name: 'Tablet', price: 300}
    ])
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const products = [
        {id: 1, name: 'Computadora', price: 800},
        {id: 2, name: 'Teléfono', price: 500},
        {id: 3, name: 'Tablet', price: 300}
    ]

    const requestedProduct = products.find((product) => product.id === id);
    res.json(requestedProduct);
});

module.exports = router;