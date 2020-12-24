'use strict';

module.exports = {
    userRequest: {
        name: { type: 'string', required: true, description: '名称' },
        age: { type: 'number', required: false, description: '年龄' },
        gender: { type: 'string', required: false, description: '性别' },
        cellphone: { type: 'number', required: true, description: '手机号' }
    }
};
