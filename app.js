require('dotenv').config();
const express = require('express');
const {sequelize} = require('./models');
const routes = require('./routes');

const app = express();

routes(app);

sequelize.authenticate()
    .then(() => {
        console.log('Соединение с БД установлено')
        sequelize.sync()
            .then(() => {
                console.error('Успешная синхронизации с БД');
                app.listen(process.env.PORT, process.env.URL, () => {
                    console.log(`Сервер запущен: ${process.env.URL}:${process.env.PORT}`);
                });
            })
            .catch((err) => {
                console.error('Ошибка синхронизации БД:', err);
            });
    })
    .catch((err) => console.error('Ошибка установки соединения с базой данных:', err));
