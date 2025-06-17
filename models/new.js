const {DataTypes, Model} = require('sequelize');

class New extends Model {
    static initModel(sequelize) {
        New.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: true,
                }
            },
            {
                sequelize,
                modelName: 'new',
            })
    }
}

module.exports = New;
