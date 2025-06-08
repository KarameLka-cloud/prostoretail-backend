const {Sequelize} = require('sequelize');
const {User} = require('./user');

const syncDb = async () => {
    await sequelize.sync();
};

module.exports = {
    Sequelize,
    User,
    syncDb
};
