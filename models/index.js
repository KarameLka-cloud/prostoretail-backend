const sequelize = require('../config/database');

const User = require('./user');
const Category = require('./category');
const Game = require('./game');

User.initModel(sequelize);
Category.initModel(sequelize);
Game.initModel(sequelize);

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = {
    sequelize,
    User,
    Category,
    Game
};
