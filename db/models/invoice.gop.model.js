const { Model, DataTypes } = require('sequelize')
const { Sectors } = require('./sectors.model')
const { Employees } = require('./employees.model')
const { GoPayments } = require('./goPayments.model')

const INVOICE_PAYMENTS_TABLE = 'INVOICE_PAYMENTS'

const InvoicePaymentsSchema = {
  ID_INVOICE_PAYMENT: {
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
  EMPLOYEE_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: Employees,
      key: 'EMPLOYEE_ID',
    },
  },
  CONCEPT: {
    type: DataTypes.STRING,
  },
  GOP_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: GoPayments,
      key: 'GOP_ID',
    },
  },
}

class InvoicePayments extends Model {
  static associate(models) {
    this.belongsTo(models.Sectors, {
      foreignKey: 'SECTOR_ID',
      as: 'sector',
    })

    this.belongsTo(models.Workers, {
      foreignKey: 'WORKER_ID',
      as: 'worker',
    })

    this.belongsTo(models.GoPayments, {
      foreignKey: 'GOP_ID',
      as: 'goPayment',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_PAYMENTS_TABLE,
      modelName: 'InvoicePayments',
      timestamps: false,
    }
  }
}

module.exports = { InvoicePayments, InvoicePaymentsSchema, INVOICE_PAYMENTS_TABLE }
