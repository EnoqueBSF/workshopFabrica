module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      instituicao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'instituicoes',
          key: 'id',
        },
      },
      sala_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'salas',
          key: 'id',
        },
      },
      nome_completo: { type: Sequelize.STRING, allowNull: false },
      cpf: { type: Sequelize.STRING, allowNull: false },
      anotacao: { type: Sequelize.STRING, allowNull: true },
      matricula: { type: Sequelize.STRING, allowNull: false },
      curso: { type: Sequelize.STRING, allowNull: false },
      periodo: { type: Sequelize.INTEGER, allowNull: false },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('alunos');
  },
};
