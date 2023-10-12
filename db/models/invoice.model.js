const { Model, DataTypes } = require('sequelize')
const { Sectors } = require('./sectors.model')
const { Clients } = require('./clients.model')
const { SalesChangesCustomers } = require('./salesChargesCustomers.model')

const INVOICES_TABLE = 'INVOICES'

const InvoicesSchema = {
  INVOICE_ID: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  INVOICE_NUMBER: {
    type: DataTypes.STRING,
  },
  SAVED_DATE: {
    type: DataTypes.DATE,
  },
  SECTOR_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: Sectors,
      key: 'SECTOR_ID',
    },
  },
  CLIENT_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: Clients,
      key: 'CLIENT_ID',
    },
  },
  CONCEPT: {
    type: DataTypes.STRING,
  },
  VENCOCLI_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: SalesChangesCustomers,
      key: 'VENCOCLI_ID',
    },
  },
}

class Invoices extends Model {
  static associate() {
    this.belongsTo(Sectors, {
      foreignKey: 'SECTOR_ID',
      as: 'sector',
    })

    this.belongsTo(Clients, {
      foreignKey: 'CLIENT_ID',
      as: 'client',
    })

    this.belongsTo(SalesChangesCustomers, {
      foreignKey: 'VENCOCLI_ID',
      as: 'salesPaymentsClient',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICES_TABLE,
      modelName: 'Invoices',
      timestamps: false,
    }
  }
}

module.exports = { Invoices, InvoicesSchema, INVOICES_TABLE }
