/* egg_folder/app/controller/product.js */
'use strict';
/**
 * @Controller product
 */
const Controller = require('egg').Controller;

class ProductController extends Controller {
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
     * @summary 查询所有商品。
     * @description 查询所有商品。
     * @router get /version01/controllers/show （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 show 方法 ）。
     * @response 200 JsonBody 返回结果。
     */
    async show(){
        const ctx = this.ctx; // 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
        const service = this.service; // 应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。

        const param = ctx.query; // 获取请求参数。
        const result = await service.product.show(); // 查找 service/product.js 下的 show 方法。

        this.JsonBody(result);
    }

    /*
     * 对返回的数据结果进行封装。
     */
    JsonBody (data) {
        this.ctx.body = {
            result: data,
        };
    }

}

module.exports = ProductController;
