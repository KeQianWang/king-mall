'use strict';

const { DATE } = require('sequelize');

module.exports = (app) => {
    const { STRING, INTEGER, TEXT, DECIMAL, BOOLEAN, DATE } = app.Sequelize;

    const Product = app.model.define('product', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        title: STRING,
        category: INTEGER,
        pic_url: STRING,
        detail: TEXT,
        primary_pic_url: STRING,
        price: DECIMAL,
        exclusive_price: DECIMAL,
        volume: INTEGER,
        sell_volume: STRING,
        is_hot: BOOLEAN,
        is_new: BOOLEAN,
        is_on_sale: BOOLEAN,
        sort_order: INTEGER,
        created_at: DATE,
        updated_at: DATE
    });

    return Product;
};
