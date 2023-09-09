const { Model, DataTypes } = require('sequelize')
const { OperationalExpenses } = require('./operationalExpenses.model') // Import the OperationalExpenses model
const { Employees } = require('./employees.model') // Import the Employees model

const PAYMENTS_TABLE = 'PAYMENTS'

const PaymentsSchema = {
  PAYMENT_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  PAYMENT_VALUE: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  EMPLOYEE_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  OPERATIONAL_EXPENSES_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  PAYMENT_DATE: {
    type: DataTypes.DATE, // Adjust data type as appropriate in your database
    allowNull: false,
  },
}

class Payments extends Model {
  static associate() {
    this.belongsTo(OperationalExpenses, {
      as: 'operationalExpenses',
      foreignKey: 'OPERATIONAL_EXPENSES_ID',
    })

    this.belongsTo(Employees, {
      as: 'employee',
      foreignKey: 'EMPLOYEE_ID',
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
