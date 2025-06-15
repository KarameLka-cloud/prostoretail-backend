const express = require('express');
const userRoutes = require('./users');
const categoryRoutes = require('./categories');

module.exports = function (app) {
    app.use(express.json());
    app.use('/users', userRoutes);
    app.use('/categories', categoryRoutes);
};
