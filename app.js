require('dotenv').config();
const express = require('express');
const {sequelize} = require('./models');

// const userRoutes = require('./routes/users');
// const categoryRoutes = require('./routes/categories');

const app = express();

// app.use(express.json());
// app.use('/users', userRoutes);
// app.use('/categories', categoryRoutes);

sequelize.sync({force: true})
    .then(() => {
        app.listen(process.env.PORT, process.env.URL, () => {
            console.log(`Сервер запущен: ${process.env.URL}:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to sync database:', err);
    });
