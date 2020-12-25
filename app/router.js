'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;

    // 产品信息
    router.post('/api/products', controller.products.create);
    router.get('/api/products', controller.products.index);
    router.delete('/api/products/:id', controller.products.delete);

    // 用户信息
    router.post('/api/users/create', controller.users.create);

    // 收货地址
    router.post('/api/addresses/create', controller.addresses.create);
    router.delete('/api/addresses/delete/:id', controller.addresses.delete);
};
