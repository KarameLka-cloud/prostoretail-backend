const express = require('express');
const {New} = require('../models');
const router = express.Router();
const crud = require('../services/crud')

router.get('/', crud.getAll(New));
router.get('/:id', crud.getById(New));
router.post('/', crud.createItem(New));
router.put('/:id', crud.updateItem(New));
router.delete('/:id', crud.deleteItem(New));

module.exports = router;
