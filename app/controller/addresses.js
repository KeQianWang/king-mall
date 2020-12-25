/* egg_folder/app/controller/addresses.js */
'use strict';
/**
 * @Controller addresses
 */
const Controller = require('egg').Controller;

class AddressesController extends Controller {
    /**
     * @summary 创建用户收获地址
     * @description 创建用户收获地址
     * @router POST /api/addresses/create
     * @request body addressRequest *body 用户收获地址信息
     * @response 201 createAddressResponse 创建成功
     */

    async create() {
        const ctx = this.ctx;
        const {
            name,
            mobile,
            province,
            city,
            district,
            postcode,
            detail,
            userId
        } = ctx.request.body;
        const res = await ctx.model.Address.create({
            name,
            mobile,
            province,
            city,
            district,
            postcode,
            detail,
            userId
        });
        ctx.status = 201;
        ctx.body = res;
    }

    /**
     * @summary 删除用户收获地址
     * @description 删除用户收获地址
     * @router delete /api/addresses/delete/{id}
     * @request path string *id
     * @response 200 deleteResponse 删除成功
     */
    async delete() {
        const { ctx, service } = this;
        const id = ctx.params.id;
        ctx.body = await service.address.deleteAddress(id);
    }
}

module.exports = AddressesController;
