const BaseService = require('./base.Service')
const { Charges } = require('../db/models/charges.model')
const { Clients } = require('../db/models/clients.model')
const boom = require('@hapi/boom')

class ChargesService extends BaseService {
  constructor() {
    super(Charges)
  }

  async findAndCustomer() {
    const cobrosData = await this.super.findAll({
      attributes: ['ID_COBROS', 'ID_CLIENTE', 'VALOR_COBRO', 'FECHA_PAGO'],
      include: [
        {
          model: Clients,
          attributes: ['NOMBRE', 'APELLIDO', 'IDENTIFICACION', 'CORREO', 'TELEFONO'],
          as: 'cliente',
        },
      ],
    })

    return cobrosData
  }

  async create(data) {
    return super.create(data)
  }

  async find() {
    const charges = await super.find()
    return charges
  }

  async findOne(id) {
    const charge = await super.findOne(id)
    if (!charge) {
      throw boom.notFound('Charge not found')
    }
    return charge
  }

  async update(id, changes) {
    const charge = await super.findOne(id)
    if (!charge) {
      throw boom.notFound('Charge not found')
    }
    await charge.update(changes)
    return charge
  }

  async delete(id) {
    const charge = await super.findOne(id)
    if (!charge) {
      throw boom.notFound('Charge not found')
    }
    await charge.destroy()
    return { id }
  }
}

module.exports = ChargesService
