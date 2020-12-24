'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER
      },
      pic_url: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT
      },
      primary_pic_url: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      exclusive_price: {
        type: Sequelize.DECIMAL
      },
      volume: {
        type: Sequelize.INTEGER
      },
      sell_volume: {
        type: Sequelize.STRING
      },
      is_hot: {
        type: Sequelize.BOOLEAN
      },
      is_new: {
        type: Sequelize.BOOLEAN
      },
      is_on_sale: {
        type: Sequelize.BOOLEAN
      },
      sort_order: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};