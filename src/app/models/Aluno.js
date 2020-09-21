const { Sequelize, Model } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        instituicao_id: Sequelize.INTEGER,
        sala_id: Sequelize.INTEGER,
        nome_completo: Sequelize.STRING,
        matricula: Sequelize.STRING,
        anotacao: Sequelize.STRING,
        curso: Sequelize.STRING,
        periodo: Sequelize.INTEGER,
        cpf: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'alunos',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Instituicao, {
      as: 'instituicao',
      foreignKey: 'instituicao_id',
    });
    this.belongsTo(models.Sala, {
      as: 'sala',
      foreignKey: 'sala_id',
    });
  }
}

module.exports = Aluno;
