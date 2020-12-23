'use strict';

module.exports = {
    productRequest: {
        title: { type: 'string', description: '名称' },
        category: { type: 'integer', description: '分类' },
        pic_url: { type: 'string', description: '产品图片 至少两张' },
        detail: { type: 'string', description: '产品详情' },
        primary_pic_url: { type: 'string', description: '主图 热点使用' },
        price: { type: 'number', description: '价格' },
        exclusive_price: { type: 'number', description: '促销价格' },
        volume: { type: 'integer', description: '库存数量' },
        sell_volume: { type: 'integer', description: '销量' },
        is_hot: { type: 'boolean', description: '是否热点' },
        is_new: { type: 'boolean', description: '是否新品' },
        is_on_sale: { type: 'boolean', description: '是否上架' },
        sort_order: { type: 'integer', description: '排序' }
    },
    deleteRequest: {
        id: { type: 'json', required: true, description: 'id' }
    }
};
