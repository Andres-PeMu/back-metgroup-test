const { Model, DataTypes } = require('sequelize')

const CLIENTS_TABLE = 'CLIENTS' // Make sure this is the correct name of your clients table

const ClientsSchema = {
  CLIENT_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'CLIENT_ID',
  },
  FIRST_NAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LAST_NAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IDENTIFICATION: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EMAIL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PHONE: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}

class Clients extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENTS_TABLE,
      modelName: 'Clients',
      timestamps: false,
    }
  }
}

module.exports = { Clients, ClientsSchema, CLIENTS_TABLE }
