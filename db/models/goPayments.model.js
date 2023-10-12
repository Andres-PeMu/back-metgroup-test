const { Model, DataTypes } = require('sequelize')
const { OperationalExpenses } = require('./operationalExpenses.model')
const { Payments } = require('./payments.model')
const { Employees } = require('./employees.model')

const GO_PAYMENT_TABLE = 'GO_PAGOS'

const GoPaymensSchema = {
  GOP_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  OPERATIONAL_EXPENSE_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PAYMENT_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  EMPLOYEE_ID: {
    type: DataTypes.INTEGER,
  },
}

class GoPayments extends Model {
  static associate() {
    this.belongsTo(OperationalExpenses, {
      foreignKey: 'OPERATIONAL_EXPENSE_ID',
      as: 'operationalExpense',
    })

    this.belongsTo(Payments, {
      foreignKey: 'PAYMENT_ID',
      as: 'payment',
    })

    this.belongsTo(Employees, {
      foreignKey: 'EMPLOYEE_ID',
      as: 'employee',
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: GO_PAYMENT_TABLE,
      modelName: 'GoPaymens',
      timestamps: false,
    }
  }
}

module.exports = { GoPayments, GoPaymensSchema, GO_PAYMENT_TABLE }
