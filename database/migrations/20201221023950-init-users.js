'use strict';

module.exports = {
    // 在执行数据库升级时调用的函数，创建 users 表
    up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('users', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(30),
            age: INTEGER,
            created_at: DATE,
            updated_at: DATE
        });
    },
    // 在执行数据库降级时调用的函数，删除 users 表
    down: async queryInterface => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
        await queryInterface.dropTable('users');
    }
};
