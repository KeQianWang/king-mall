/* egg_folder/app/controller/product.js */
'use strict';
/**
 * @Controller product
 */
const Controller = require('egg').Controller;

class ProductController extends Controller {


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
            devices: products.rows
        };
    }


    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
     * @summary 查询所有商品。
     * @description 查询所有商品。
     * @router get /version01/controllers/show （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 show 方法 ）。
     * @response 200 JsonBody 返回结果。
     */
    async show() {
        const ctx = this.ctx; // 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
        const service = this.service; // 应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。

        const param = ctx.query; // 获取请求参数。
        const result = await service.product.show(); // 查找 service/product.js 下的 show 方法。

        this.JsonBody(result);
    }

    /*
     * 对返回的数据结果进行封装。
     */
    JsonBody(data) {
        this.ctx.body = {
            result: data
        };
    }

    /**
     * @summary 创建产品
     * @description 创建产品
     * @router POST /api/products
     * @request body productRequest *body 产品信息
     * @response 201 createProductResponse 创建成功
     */
    async create() {
        const ctx = this.ctx;
        const { name, desc } = ctx.request.body;
        const product = await ctx.model.Product.create({ name, desc });
        ctx.status = 201;
        ctx.body = product;
    }

}

module.exports = ProductController;
