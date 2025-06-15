const {DataTypes, Model} = require('sequelize');

class Game extends Model {
    static initModel(sequelize) {
        Game.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'game',
            }
        );
    }
}

module.exports = Game;
