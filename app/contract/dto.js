'use strict';

module.exports = {
    product: {
        id: { type: 'string', description: 'id 唯一键' },
        name: { type: 'string', description: '名称' },
        desc: { type: 'string', description: '描述' }
    },
    user: {
        id: { type: 'string', description: 'id 唯一键' },
        name: { type: 'string', description: '名称' },
        age: { type: 'number', description: '年龄' }
    }

};
