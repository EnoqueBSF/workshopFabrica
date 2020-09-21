module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('instituicoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: { type: Sequelize.STRING, allowNull: false },
      nome_fantasia: { type: Sequelize.STRING, allowNull: false },
      cnpj: { type: Sequelize.STRING, allowNull: false },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('instituicoes');
  },
};
