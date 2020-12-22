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
    mysql: {
        enable: true,
        package: 'egg-mysql'
    },
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
        define: {
            // 主动写入工夫戳 created_at updated_at
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            // 字段生成软删除工夫戳 deleted_at
            // paranoid: true,
            deletedAt: 'deleted_at',
            // 所有驼峰命名格式化
            underscored: true
        }
    }
};
