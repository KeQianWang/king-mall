'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {

    async index() {
        this.ctx.body = '{"product":"unknown","status":"OK"}';
    }

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
