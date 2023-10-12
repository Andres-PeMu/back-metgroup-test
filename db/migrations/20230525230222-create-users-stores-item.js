'use strict'

const { CHARGES_TABLE, ChargesSchema } = require('./../models/charges.model')
const { USER_TABLE, UserSchema } = require('./../models/users.model')
const { PAYMENTS_TABLE, PaymentsSchema } = require('./../models/payments.model')
const { CLIENTS_TABLE, ClientsSchema } = require('./../models/clients.model')
const { SECTORS_TABLE, SectorsSchema } = require('./../models/sectors.model')
const { LOTS_TABLE, LotsSchema } = require('./../models/lots.model')
const { SALES_TABLE, SalesSchema } = require('./../models/sales.model')
const { EMPLOYEES_TABLE, EmployeesSchema } = require('./../models/employees.model')
const {
  OPERATIONAL_EXPENSES_TABLE,
  OperationalExpensesSchema,
} = require('./../models/operationalExpenses.model')
const { GO_PAYMENT_TABLE, GoPaymensSchema } = require('../models/goPayments.model')
const {
  SALES_CHARGES_CUSTOMER_TABLE,
  SalesChangesCustomersSchema,
} = require('./../models/salesChargesCustomers.model')
const { INVOICES_TABLE, InvoicesSchema } = require('../models/invoice.model')
const {
  INVOICE_PAYMENTS_TABLE,
  InvoicePaymentsSchema,
} = require('./../models/invoice.gop.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(CLIENTS_TABLE, ClientsSchema)
    await queryInterface.createTable(SECTORS_TABLE, SectorsSchema)
    await queryInterface.createTable(LOTS_TABLE, LotsSchema)
    await queryInterface.createTable(CHARGES_TABLE, ChargesSchema)
    await queryInterface.createTable(SALES_TABLE, SalesSchema)
    await queryInterface.createTable(EMPLOYEES_TABLE, EmployeesSchema)
    await queryInterface.createTable(
      OPERATIONAL_EXPENSES_TABLE,
      OperationalExpensesSchema
    )
    await queryInterface.createTable(GO_PAYMENT_TABLE, GoPaymensSchema)
    await queryInterface.createTable(PAYMENTS_TABLE, PaymentsSchema)
    await queryInterface.createTable(
      SALES_CHARGES_CUSTOMER_TABLE,
      SalesChangesCustomersSchema
    )
    await queryInterface.createTable(INVOICES_TABLE, InvoicesSchema)
    await queryInterface.createTable(INVOICE_PAYMENTS_TABLE, InvoicePaymentsSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CLIENTS_TABLE)
    await queryInterface.dropTable(PAYMENTS_TABLE)
  },
}
