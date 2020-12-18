'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1608089532661_4190';

    // add your middleware config here
    config.middleware = [];


    config.security = {
        csrf: {
            enable: false
        }
    };

    // config.mysql = {
    //     // 单数据库信息配置
    //     client: {
    //         // host
    //         host: '127.0.0.1',
    //         // 端口号
    //         port: '3306',
    //         // 用户名
    //         user: 'root',
    //         // 密码
    //         password: 'hjj1981208',
    //         // 数据库名
    //         database: 'king_mall'
    //     },
    //     // 是否加载到 app 上，默认开启
    //     app: true,
    //     // 是否加载到 agent 上，默认关闭
    //     agent: false
    // };
    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'hjj19881208',
        database: 'king_mall'
    };

    config.swaggerdoc = {
        dirScanner: './app/controller',
        apiInfo: {
            title: 'king-shop-swagger',
            description: 'swagger-ui for egg',
            version: '1.0.0'
        },
        schemes: [ 'http', 'https' ],
        consumes: [ 'application/json' ],
        produces: [ 'application/json' ],
        securityDefinitions:
            {
                // apikey: {
                //   type: 'apiKey',
                //   name: 'clientkey',
                //   in: 'header',
                // },
                // oauth2: {
                //   type: 'oauth2',
                //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
                //   flow: 'password',
                //   scopes: {
                //     'write:access_token': 'write access_token',
                //     'read:access_token': 'read access_token',
                //   },
                // },
            },
        enableSecurity: false,
        // enableValidate: true,
        routerMap: false,
        enable: true
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig
    };
};
