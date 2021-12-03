'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produto', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }, 
      esp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'especie',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      prd_descricao: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },       
      prd_validade: {
        type: Sequelize.STRING(5)
      },
      prd_especie: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },       
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },  

   });
  },
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produto');
  }
};
