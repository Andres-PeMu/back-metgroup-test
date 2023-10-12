class BaseService {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    return this.model.create(data)
  }

  async find() {
    return this.model.findAll()
  }

  async findOne(id) {
    return this.model.findByPk(id)
  }

  async update(id, changes) {
    const entity = await this.findOne(id)
    if (!entity) {
      throw new Error(`${this.model.name} not found`)
    }
    return entity.update(changes)
  }

  async deleteOne(id) {
    const entity = await this.findOne(id)
    if (!entity) {
      throw new Error(`${this.model.name} not found`)
    }
    await entity.destroy()
    return { id }
  }
}

module.exports = BaseService
