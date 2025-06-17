const sequelize = require('../config/database');

const User = require('./user');
const Category = require('./category');
const Game = require('./game');
const New = require('./new');

User.initModel(sequelize);
Category.initModel(sequelize);
Game.initModel(sequelize);
New.initModel(sequelize);

module.exports = {
    sequelize,
    User,
    Category,
    Game,
    New
};
