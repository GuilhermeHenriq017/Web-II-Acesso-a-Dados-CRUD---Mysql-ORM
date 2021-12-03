'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('especie', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }, 
      esp_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },       
      esp_validade: {
        type: Sequelize.STRING(10)
      },
      esp_orientacao: {
        allowNull: false,
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable('especie');
  }
};
