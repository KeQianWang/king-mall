
'use strict';

module.exports = {
    productRequest: {
        name: { type: 'string', required: true, description: '名称' },
        desc: { type: 'string', required: false, description: '描述' },
    },
    deleteRequest: {
        id:{ type: 'json', required: true, description: 'id' },
    }
};
