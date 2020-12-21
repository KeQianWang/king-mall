'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Product = app.model.define('product', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        desc: STRING(300),
        created_at: DATE,
        updated_at: DATE
    });

    return Product;
};
