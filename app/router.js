'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;
    router.post('/api/products', controller.products.create);
    router.get('/api/products', controller.products.index);
    router.delete('/api/products/:id', controller.products.delete);
    router.post('/api/users/create', controller.users.create);
    router.post('/api/addresses/create', controller.addresses.create);
};
