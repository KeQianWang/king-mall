/* egg_folder/app/controller/users.js */
'use strict';
/**
 * @Controller users
 */
const Controller = require('egg').Controller;

class UsersController extends Controller {
    /**
     * @summary 创建用户
     * @description 创建创建用户
     * @router POST /api/users/create
     * @request body userRequest *body 用户信息
     * @response 201 createUserResponse 创建成功
     */
    async create() {
        const ctx = this.ctx;
        const { name, age, gender, cellphone } = ctx.request.body;
        const res = await ctx.model.User.create({
            name,
            age,
            gender,
            cellphone
        });
        ctx.status = 201;
        ctx.body = res;
    }
}

module.exports = UsersController;
