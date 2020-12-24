'use strict';

module.exports = {
    product: {
        id: { type: 'string', description: 'id 唯一键' },
        title: { type: 'string', description: '名称' },
        category: { type: 'number', description: '分类' },
        pic_url: { type: 'string', description: '产品图片 至少两张' },
        detail: { type: 'string', description: '产品详情' },
        primary_pic_url: { type: 'string', description: '主图 热点使用' },
        price: { type: 'string', description: '价格' },
        exclusive_price: { type: 'string', description: '促销价格' },
        volume: { type: 'string', description: '库存数量' },
        sell_volume: { type: 'string', description: '销量' },
        is_hot: { type: 'string', description: '是否热点' },
        is_new: { type: 'string', description: '是否新品' },
        is_on_sale: { type: 'string', description: '是否上架' },
        sort_order: { type: 'string', description: '排序' }
    },
    user: {
        id: { type: 'string', description: 'id 唯一键' },
        name: { type: 'string', description: '名称' },
        age: { type: 'number', description: '年龄' }
    }
};
