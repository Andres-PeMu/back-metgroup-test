const { Model, DataTypes } = require('sequelize')

const SECTORS_TABLE = 'SECTORS'

const SectorsSchema = {
  SECTOR_ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'ID_SECTOR',
  },
  NAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LOT_NUMBER: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'NUMERO_LOTE',
  },
}

class Sectors extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SECTORS_TABLE,
      modelName: 'Sectors',
      timestamps: false,
    }
  }
}

module.exports = { Sectors, SectorsSchema, SECTORS_TABLE }
