const { Model, DataTypes, Sequelize } = require('sequelize')
const { Lots } = require('./lots.model') // Import the Lots model
const { Clients } = require('./clients.model') // Import the Clients model

const SALES_TABLE = 'SALES'

const SalesSchema = {
  SALE_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'SALE_ID',
  },
  SALE_VALUE: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'SALE_VALUE',
  },
  LOT_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'LOT_ID',
  },
  CLIENT_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'CLIENT_ID',
  },
  CREATE_AT: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'CREATE_AT',
    defaultValue: Sequelize.fn('now'),
  },
}

class Sales extends Model {
  static associate() {
    this.belongsTo(Lots, {
      as: 'LOTS_TABLE',
      foreignKey: 'LOT_ID',
    })

    this.belongsTo(Clients, {
      as: 'CLIENTS_TABLE',
      foreignKey: 'CLIENT_ID',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALES_TABLE,
      modelName: 'Sales',
      timestamps: false,
    }
  }
}

module.exports = { Sales, SalesSchema, SALES_TABLE }
