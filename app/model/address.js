'use strict';

module.exports = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const Address = app.model.define('address', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING,
        mobile: STRING,
        province: STRING,
        city: STRING,
        district: STRING,
        postcode: STRING,
        detail: STRING,
        userId: INTEGER
    });

    return Address;
};
