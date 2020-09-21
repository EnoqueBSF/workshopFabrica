const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Aluno = require('../app/models/Aluno');
const Instituicao = require('../app/models/Instituicao');
const Sala = require('../app/models/Sala');

const models = [Aluno, Instituicao, Sala];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}
module.exports = new Database();
