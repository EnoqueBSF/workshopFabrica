const { Sequelize, Model } = require('sequelize');

class Instituicao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        nome_fantasia: Sequelize.STRING,
        cnpj: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'instituicoes',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Sala, {
      as: 'salas',
      foreignKey: 'instituicao_id',
    });
    this.hasMany(models.Aluno, {
      as: 'alunos',
      foreignKey: 'instituicao_id',
    });
  }
}

module.exports = Instituicao;
