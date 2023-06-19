const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    //nombre
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [5,24],
          msg: 'this name must be between 5 and 24 characters'
        }   
      },
    },
    //imagen del pokemon correspondiente
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //vida
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    //ataque
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    //defensa
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    //ataque especial
    special_attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    //defensa especial
    special_defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    //velocidad
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    //altura
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    //peso
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
  }, {timestamps: false, freezeTableName: true});
};
