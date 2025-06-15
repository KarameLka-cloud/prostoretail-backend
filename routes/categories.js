const express = require('express');
const {Category} = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
});

router.post('/', async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category);
});

module.exports = router;
