const { Model, DataTypes, Sequelize } = require('sequelize')
const { Clients } = require('./clients.model')

const PAYMENTS_TABLE = 'PAYMENTS'

const PaymentsSchema = {
  PAYMENT_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'PAYMENT_ID',
  },
  PAYMENT_VALUE: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'PAYMENT_VALUE',
  },
  CLIENT_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'CLIENT_ID',
  },
  CREATE_AT: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'CREATE_AT',
    defaultValue: Sequelize.fn('now'),
  },
}

class Payments extends Model {
  static associate() {
    this.belongsTo(Clients, {
      as: 'CLIENTS',
      foreignKey: 'CLIENT_ID',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PAYMENTS_TABLE,
      modelName: 'Payments',
      timestamps: false,
    }
  }
}

module.exports = { Payments, PaymentsSchema, PAYMENTS_TABLE }
