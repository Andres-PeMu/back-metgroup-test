'use strict'

const { PAYMENTS_TABLE, PaymentsSchema } = require('./../models/charges.model')
const { CLIENTS_TABLE, ClientsSchema } = require('./../models/clients.model')
const { SECTORS_TABLE, SectorsSchema } = require('./../models/sectors.model')
const { LOTS_TABLE, LotsSchema } = require('./../models/lots.model')
const { SALES_TABLE, SalesSchema } = require('./../models/sales.model')
const { EMPLOYEES_TABLE, EmployeesSchema } = require('./../models/employees.model')
const {
  OPERATIONAL_EXPENSES_TABLE,
  OperationalExpensesSchema,
} = require('./../models/operationalExpenses.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CLIENTS_TABLE, ClientsSchema)
    await queryInterface.createTable(SECTORS_TABLE, SectorsSchema)
    await queryInterface.createTable(LOTS_TABLE, LotsSchema)
    await queryInterface.createTable(PAYMENTS_TABLE, PaymentsSchema)
    await queryInterface.createTable(SALES_TABLE, SalesSchema)
    await queryInterface.createTable(EMPLOYEES_TABLE, EmployeesSchema)
    await queryInterface.createTable(
      OPERATIONAL_EXPENSES_TABLE,
      OperationalExpensesSchema
    )
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CLIENTS_TABLE)
    await queryInterface.dropTable(PAYMENTS_TABLE)
  },
}
