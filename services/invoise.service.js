const BaseService = require('./base.Service')
const { Invoices } = require('../db/models/invoice.model')
const { Sectors } = require('../db/models/sectors.model')
const { Employees } = require('../db/models/employees.model')
const { SalesChangesCustomers } = require('../db/models/salesChargesCustomers.model')
const { Payments } = require('../db/models/payments.model')
const { GoPayments } = require('../db/models/goPayments.model')
const boom = require('@hapi/boom')

class InvoicesService extends BaseService {
  constructor() {
    super(Invoices)
  }

  async create(data) {
    return super.create(data)
  }

  async find() {
    const invoices = await this.findAll({
      attributes: [
        'ID_FACTURA',
        'NUMERO_FACTURA',
        'FECHA_GUARDADA',
        'ID_SECTOR',
        'ID_CLIENTE',
        'CONCEPTO',
        'ID_VENCOCLI',
      ],
      include: [
        { model: Sectors, attributes: ['NAME', 'NUMERO_LOTE'], as: 'sector' },
        {
          model: Employees,
          attributes: ['NOMBRE', 'APELLIDO', 'IDENTIFICACION', 'CORREO', 'TELEFONO'],
          as: 'worker',
        },
        {
          model: GoPayments,
          attributes: ['ID_COBROS', 'VALOR_COBRO', 'FECHA_PAGO'],
          as: 'goPayment',
        },
        {
          model: SalesChangesCustomers,
          attributes: ['ID_VENTAS', 'ID_COBROS'],
          as: 'ventaCobroCliente',
          include: [
            {
              model: Payments,
              attributes: ['ID_COBROS', 'VALOR_COBRO', 'FECHA_PAGO'],
              as: 'cobro',
            },
          ],
        },
      ],
    })

    return invoices
  }

  async findOne(id) {
    const invoice = await this.findByPk(id, {
      attributes: [
        'ID_FACTURA',
        'NUMERO_FACTURA',
        'FECHA_GUARDADA',
        'ID_SECTOR',
        'ID_CLIENTE',
        'CONCEPTO',
        'ID_VENCOCLI',
      ],
      include: [
        { model: Sectors, attributes: ['NAME', 'NUMERO_LOTE'], as: 'sector' },
        {
          model: Employees,
          attributes: ['NOMBRE', 'APELLIDO', 'IDENTIFICACION', 'CORREO', 'TELEFONO'],
          as: 'worker',
        },
        {
          model: GoPayments,
          attributes: ['ID_COBROS', 'VALOR_COBRO', 'FECHA_PAGO'],
          as: 'goPayment',
        },
        {
          model: SalesChangesCustomers,
          attributes: ['ID_VENTAS', 'ID_COBROS'],
          as: 'ventaCobroCliente',
          include: [
            {
              model: Payments,
              attributes: ['ID_COBROS', 'VALOR_COBRO', 'FECHA_PAGO'],
              as: 'cobro',
            },
          ],
        },
      ],
    })

    if (!invoice) {
      throw boom.notFound('invoise not found')
    }

    return invoice
  }

  async findOneVencocli(id) {
    const invoice = await this.findOne({
      where: { ID_VENCOCLI: id },
      attributes: [
        'ID_FACTURA',
        'NUMERO_FACTURA',
        'FECHA_GUARDADA',
        'ID_SECTOR',
        'ID_CLIENTE',
        'CONCEPTO',
        'ID_VENCOCLI',
      ],
      include: [
        { model: Sectors, attributes: ['NAME', 'NUMERO_LOTE'], as: 'sector' },
        {
          model: Employees,
          attributes: ['NOMBRE', 'APELLIDO', 'IDENTIFICACION', 'CORREO', 'TELEFONO'],
          as: 'worker',
        },
        {
          model: GoPayments,
          attributes: ['ID_COBROS', 'VALOR_COBRO', 'FECHA_PAGO'],
          as: 'goPayment',
        },
        {
          model: SalesChangesCustomers,
          attributes: ['ID_VENTAS', 'ID_COBROS'],
          as: 'ventaCobroCliente',
          include: [
            {
              model: Payments,
              attributes: ['ID_COBROS', 'VALOR_COBRO', 'FECHA_PAGO'],
              as: 'cobro',
            },
          ],
        },
      ],
    })

    if (!invoice) {
      throw boom.notFound('invoise not found')
    }

    return invoice
  }

  async update(id, changes) {
    const invoice = await super.findOne(id)
    if (!invoice) {
      throw boom.notFound('Charge not found')
    }
    await this.super.update(changes)
    return invoice
  }

  async delete(id) {
    const invoice = await super.findOne(id)
    if (!invoice) {
      throw boom.notFound('Charge not found')
    }
    await this.super.destroy()
    return { id }
  }
}

module.exports = InvoicesService
