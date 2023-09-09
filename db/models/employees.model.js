const { Model, DataTypes, Sequelize } = require('sequelize')
const { Sectors } = require('./sectors.model') // Import the Sectors model

const EMPLOYEES_TABLE = 'EMPLOYEES'

const EmployeesSchema = {
  EMPLOYEE_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  IDENTIFICATION: {
    type: DataTypes.STRING, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  FIRST_NAME: {
    type: DataTypes.STRING, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  LAST_NAME: {
    type: DataTypes.STRING, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  EMAIL: {
    type: DataTypes.STRING, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  SECTOR_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
  },
  CREATE_AT: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'CREATE_AT',
    defaultValue: Sequelize.fn('now'),
  },
}

class Employees extends Model {
  static associate() {
    this.belongsTo(Sectors, {
      as: 'SECTORS_TABLE',
      foreignKey: 'SECTOR_ID',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLOYEES_TABLE,
      modelName: 'Employees',
      timestamps: false,
    }
  }
}

module.exports = { Employees, EmployeesSchema, EMPLOYEES_TABLE }
