/* egg_folder/app/controller/product.js */
'use strict';
/**
 * @Controller product
 */
const Controller = require('egg').Controller;

class ProductController extends Controller {
    /**
     * @summary 创建产品
     * @description 创建产品
     * @router POST /api/products
     * @request body productRequest *body 产品信息
     * @response 201 createProductResponse 创建成功
     */
    async create() {
        const ctx = this.ctx;
        const {
            title,
            category,
            pic_url,
            detail,
            primary_pic_url,
            price,
            exclusive_price,
            volume,
            sell_volume,
            is_hot,
            is_new,
            is_on_sale,
            sort_order
        } = ctx.request.body;
        const product = await ctx.model.Product.create({
            title,
            category,
            pic_url,
            detail,
            primary_pic_url,
            price,
            exclusive_price,
            volume,
            sell_volume,
            is_hot,
            is_new,
            is_on_sale,
            sort_order
        });
        ctx.status = 201;
        ctx.body = product;
    }

    //参考 https://github.com/Yanshijie-EL/egg-example-api/blob/master/app/controller/user.js

    /**
     * @summary 删除产品
     * @description 删除产品
     * @router delete /api/products/{id}
     * @request path string *id
     * @response 200 deleteResponse 删除成功
     */
    async delete() {
        const { ctx, service } = this;
        const id = ctx.params.id;
        ctx.body = await service.product.destroyProduct(id);
    }

    /**
     * @summary 获取产品列表
     * @description 分页获取产品信息
     * @router GET /api/products
     * @request query integer limit 数量 默认 10
     * @request query integer offset 偏移量 默认 0
     * @response 200 getProductsResponse 产品列表
     */
    async index() {
        const { ctx, service } = this;
        const limit = ctx.helper.toInt(ctx.query.limit || 10);
        const offset = ctx.helper.toInt(ctx.query.offset || 0);
        const query = { ...ctx.query, limit, offset };
        const products = await service.product.findProducts(query);
        ctx.body = {
            limit,
            offset,
            totalCount: products.count,
            products: products.rows
        };
    }
}

module.exports = ProductController;
