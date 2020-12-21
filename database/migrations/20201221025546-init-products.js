'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('products', { id: Sequelize.INTEGER });
     */
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('products', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(30),
            desc: STRING(300),
            created_at: DATE,
            updated_at: DATE
        });
    },

    down: async queryInterface => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('products');
     */
        await queryInterface.dropTable('products');
    }
};
