require('dotenv').config();
const express = require('express');
const {sequelize} = require('./models');
const routes = require('./routes');

const app = express();

routes(app);

sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT, process.env.URL, () => {
            console.log(`Сервер запущен: ${process.env.URL}:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to sync database:', err);
    });
