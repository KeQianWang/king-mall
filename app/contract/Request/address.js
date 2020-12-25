'use strict';

module.exports = {
    addressRequest: {
        name: { type: 'string', description: '姓名' },
        mobile: { type: 'string', description: '手机号' },
        province: { type: 'string', description: '省/特区/自治区/直辖市' },
        city: { type: 'string', description: '城市' },
        district: { type: 'string', description: '区县' },
        postcode: { type: 'string', description: '邮编' },
        detail: { type: 'string', description: '详细地址' },
        userId: { type: 'integer', description: '用户ID' }
    }
};
