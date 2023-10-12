const { Model, DataTypes, Sequelize } = require('sequelize')
const { Clients } = require('./clients.model')

const CHARGES_TABLE = 'CHARGES'

const ChargesSchema = {
  CHARGES_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  CHARGES_VALUE: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CLIENT_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CREATE_AT: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('now'),
  },
}

class Charges extends Model {
  static associate() {
    this.belongsTo(Clients, {
      as: 'CLIENTS',
      foreignKey: 'CLIENT_ID',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARGES_TABLE,
      modelName: 'Charges',
      timestamps: false,
    }
  }
}

module.exports = { Charges, ChargesSchema, CHARGES_TABLE }
