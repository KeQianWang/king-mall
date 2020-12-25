/* egg_folder/app/service/book.js */
'use strict';
/**
 * @Service address
 */

const Service = require('egg').Service;

class AddressServices extends Service {
    async deleteAddress(id) {
        const { ctx } = this;
        const address = await ctx.model.Address.findByPk(id);
        if (!address) {
            this.ctx.throw(404, 'address not found!');
        }
        return await address.destroy({ where: { id } });
    }
}

module.exports = AddressServices;
