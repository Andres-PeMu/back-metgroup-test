const { Model, DataTypes } = require('sequelize')
const { Sectors } = require('./sectors.model') // Import the Sectors model
const { Clients } = require('./clients.model') // Import the Clients model

const LOTS_TABLE = 'LOTS' // Make sure this is the correct name of your lots table

const LotsSchema = {
  LOT_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'ID_LOTES',
  },
  LOT_NUMBER: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'NUMERO_LOTE',
  },
  LOT_VALUE: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'VALOR_LOTE',
  },
  SECTOR_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'ID_SECTOR',
  },
  CLIENT_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'ID_CLIENTE',
  },
}

class Lots extends Model {
  static associate() {
    this.belongsTo(Sectors, {
      as: 'SECTOR',
      foreignKey: 'SECTOR_ID',
    })

    this.belongsTo(Clients, {
      as: 'CLIENT',
      foreignKey: 'CLIENT_ID',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOTS_TABLE,
      modelName: 'Lots',
      timestamps: false,
    }
  }
}

module.exports = { Lots, LotsSchema, LOTS_TABLE }
