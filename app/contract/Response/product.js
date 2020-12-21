'use strict';

module.exports = {
    JsonBody: { // 这个名字对应上面 Controller 注释的@response 的 JsonBody。
        result: { type: 'string', required: true } // 服务器返回的数据。
    },
    createProductResponse: {
        id: { type: 'integer' }
    },
    deleteResponse:{
        id: { type: 'number'}
    },
    getProductsResponse: {
        limit: { type: 'integer' },
        offset: { type: 'integer' },
        totalCount: { type: 'integer' },
        products: { type: 'array', itemType: 'product' }
    }
};
