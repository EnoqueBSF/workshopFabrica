const { Sequelize, Model } = require('sequelize');

class Sala extends Model {
  static init(sequelize) {
    super.init(
      {
        instituicao_id: Sequelize.INTEGER,
        bloco: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        capacidade_max: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'salas',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Instituicao, {
      as: 'instituicao',
      foreignKey: 'instituicao_id',
    });
    this.hasMany(models.Aluno, {
      as: 'alunos',
      foreignKey: 'sala_id',
    });
  }
}

module.exports = Sala;
