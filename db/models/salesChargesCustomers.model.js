const { Model, DataTypes } = require('sequelize')
const { Sales } = require('./sales.model') // Import the Sales model
const { Charges } = require('./charges.model') // Import the Charges model
const { Clients } = require('./clients.model') // Import the Clients model

const SALES_CHARGES_CUSTOMER_TABLE = 'SALES_CHARGES_CUSTOMER'

const SalesChangesCustomersSchema = {
  VENCOCLI_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'ID_VENCOCLI',
  },
  SALE_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  CHARGE_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  CLIENT_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
}

class SalesChangesCustomers extends Model {
  static associate() {
    this.belongsTo(Sales, {
      as: 'sale',
      foreignKey: 'SALE_ID',
    })

    this.belongsTo(Charges, {
      as: 'charge',
      foreignKey: 'CHARGE_ID',
    })

    this.belongsTo(Clients, {
      as: 'client',
      foreignKey: 'CLIENT_ID',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALES_CHARGES_CUSTOMER_TABLE,
      modelName: 'SalesChangesCustomers',
      timestamps: false,
    }
  }
}

module.exports = {
  SalesChangesCustomers,
  SalesChangesCustomersSchema,
  SALES_CHARGES_CUSTOMER_TABLE,
}
