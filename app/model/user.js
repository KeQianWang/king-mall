'use strict';

module.exports = (app) => {
    const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        age: INTEGER,
        gender: STRING,
        cellphone: BIGINT(11),
        createdAt: DATE,
        updatedAt: DATE
    });

    return User;
};
