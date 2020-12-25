'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('addresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            mobile: {
                type: Sequelize.STRING
            },
            province: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            district: {
                type: Sequelize.STRING
            },
            postcode: {
                type: Sequelize.STRING
            },
            detail: {
                type: Sequelize.STRING
            },
            userId: {
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
        await queryInterface.dropTable('addresses');
    }
};
