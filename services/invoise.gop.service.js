const BaseService = require('./base.Service')
const { InvoicePayments } = require('../db/models/invoice.gop.model')
const { Sectors } = require('../db/models/sectors.model')
const { Employees } = require('../db/models/employees.model')
const { GoPayments } = require('../db/models/goPayments.model')
const boom = require('@hapi/boom')

class InvoicePaymentsService extends BaseService {
  constructor() {
    super(InvoicePayments)
  }

  async create(data) {
    return this.super.create(data)
  }

  async findAndCustomer() {
    return this.super.findAll({
      include: [
        { model: Sectors, as: 'sector' },
        { model: Employees, as: 'worker' },
        { model: GoPayments, as: 'goPayment' },
      ],
    })
  }

  async find() {
    return this.super.findAll({
      include: [
        { model: Sectors, as: 'sector' },
        { model: Employees, as: 'worker' },
        { model: GoPayments, as: 'goPayment' },
      ],
    })
  }

  async findOne(id) {
    const charge = await this.super.findByPk(id, {
      include: [
        { model: Sectors, as: 'sector' },
        { model: Employees, as: 'worker' },
        { model: GoPayments, as: 'goPayment' },
      ],
    })
    if (!charge) {
      throw boom.notFound('Charge not found')
    }
    return charge
  }

  async findOneOe(id) {
    try {
      const data = await InvoicePayments.findOne({
        where: { GOP_ID: id },
        include: [
          { model: Sectors, as: 'sector' },
          { model: Employees, as: 'employee' },
          { model: GoPayments, as: 'goPayment' },
        ],
      })

      if (!data) {
        throw new Error('Invoice not found')
      }
    } catch (err) {
      throw boom.notFound('Charge not found')
    }
  }

  async update(id, changes) {
    const charge = await this.super.findByPk(id)
    if (!charge) {
      throw boom.notFound('Charge not found')
    }
    await this.super.update(changes)
    return charge
  }

  async delete(id) {
    const charge = await this.super.findByPk(id)
    if (!charge) {
      throw boom.notFound('Charge not found')
    }
    await this.super.destroy()
    return { id }
  }
}

module.exports = InvoicePaymentsService
