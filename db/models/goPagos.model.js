const { Model, DataTypes } = require('sequelize')

const GO_PAGOS_TABLE = 'GO_PAGOS'

const GoPagosSchema = {
  GOP_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'ID_GOP',
  },
  OPERATIONAL_EXPENSE_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
    field: 'ID_GASTO_O',
  },
  PAYMENT_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
    field: 'ID_PAGO',
  },
  EMPLOYEE_ID: {
    type: DataTypes.INTEGER, // Adjust data type as appropriate in your database
    allowNull: false,
    field: 'ID_TRABAJADOR',
  },
}

class GoPagos extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: GO_PAGOS_TABLE,
      modelName: 'GoPagos',
      timestamps: false,
    }
  }
}

module.exports = { GoPagos, GoPagosSchema, GO_PAGOS_TABLE }
