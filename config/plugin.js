'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    validate: {
        enable: true,
        package: 'egg-validate'
    },
    swaggerdoc: {
        enable: true,
        package: 'egg-swagger-doc'
    },
    mysql:{
        enable: true,
        package: 'egg-mysql',
    },
};
