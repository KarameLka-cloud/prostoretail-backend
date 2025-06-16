const sequelize = require('../config/database');

const User = require('./user');
const Category = require('./category');
const Game = require('./game');

User.initModel(sequelize);
Category.initModel(sequelize);
Game.initModel(sequelize);

module.exports = {
    sequelize,
    User,
    Category,
    Game
};
