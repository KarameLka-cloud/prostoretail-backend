const express = require('express');
const {User} = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

module.exports = router;
