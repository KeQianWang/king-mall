'use strict';

module.exports = (app) => {
    const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize;
    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING,
        age: INTEGER,
        avatar: STRING,
        gender: STRING,
        cellphone: STRING
    });

    return User;
};
