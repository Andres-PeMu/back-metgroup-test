const { Clients } = require('../db/models/clients.model')
const BaseService = require('./base.Service')

class ClienteService extends BaseService {
  constructor() {
    super(Clients)
  }

  async create(data) {
    return super.create(data)
  }

  async find() {
    return super.find()
  }

  async findOne(id) {
    return super.findOne(id)
  }

  async update(id, changes) {
    return super.update(id, changes)
  }

  async deleteOne(id) {
    return super.deleteOne(id)
  }
}

module.exports = ClienteService
