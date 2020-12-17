/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1608089532661_4190';

    // add your middleware config here
    config.middleware = [];


    config.security = {
        csrf: {
            enable: false
        }
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
