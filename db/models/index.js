const { Users, UserSchema } = require('./users.model')

function setupModels(sequelize) {
  Users.init(UserSchema, Users.config(sequelize))
}

module.exports = setupModels
