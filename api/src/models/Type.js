const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3,15],
                    msg: 'this name must be between 3 and 15 characters'
                },
                
            },
        },
    },  {timestamps: false, freezeTableName: true});
};