const { Model, DataTypes } = require('sequelize')
const { Employees } = require('./employees.model') // Import the Employees model
const { Sectors } = require('./sectors.model') // Import the Sectors model

const OPERATIONAL_EXPENSES_TABLE = 'OPERATIONAL_EXPENSES'

const OperationalExpensesSchema = {
  EXPENSE_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  EXPENSE_TYPE: {
    type: DataTypes.STRING, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  HOURLY_RATE: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  HOURS_WORKED: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  EMPLOYEE_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  SECTOR_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  TOTAL_VALUE: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
}

class OperationalExpenses extends Model {
  static associate() {
    this.belongsTo(Employees, {
      as: 'employee',
      foreignKey: 'EMPLOYEE_ID',
    })

    this.belongsTo(Sectors, {
      as: 'sector',
      foreignKey: 'SECTOR_ID',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: OPERATIONAL_EXPENSES_TABLE,
      modelName: 'OperationalExpenses',
      timestamps: false,
    }
  }
}

module.exports = {
  OperationalExpenses,
  OperationalExpensesSchema,
  OPERATIONAL_EXPENSES_TABLE,
}
