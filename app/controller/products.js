'use strict';

/**
 * @Controller product
 */
const Controller = require('egg').Controller;

class ProductController extends Controller {

    async index() {
        this.ctx.body = '{"product":"unknown","status":"OK"}';
    }

    /**
     * @Router POST /product
     * @request body productRequest *body 产品信息
     * @Response 201 baseResponse ok
     */
    async create() {
        const { ctx } = this;
        ctx.body = {
            name: `${ctx.params.name}`,
            type: `${ctx.params.type}`,
            status: 'OK'
        };

    }

    async list() {
        const { ctx } = this;
        const limit = 20;
        const offset = 0;
        const products = [
            { name: 'p1', type: 't1' },
            { name: 'p2', type: 't2' },
            { name: 'p3', type: 't3' }
        ];
        ctx.body = {
            limit,
            offset,
            products,
            status: 'OK'
        };

    }
}

module.exports = ProductController;
