module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salas', {
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
      bloco: { type: Sequelize.STRING, allowNull: false },
      numero: { type: Sequelize.INTEGER, allowNull: false },
      capacidade_max: { type: Sequelize.INTEGER, allowNull: false },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('salas');
  },
};
