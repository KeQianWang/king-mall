/* egg_folder/app/service/book.js */
'use strict';
/**
 * @Service product
 */
const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class ProductServices extends Service {

    async show() {
        const product = await this.app.mysql.get('product');
        return product
    }
}

module.exports = ProductServices;
