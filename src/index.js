/**
 * @desc webpack打包入口文件  
 * @example 自动引入子目录下所有js文件
 */
let moduleExports = {};

const r = require.context('./', true, /^\.\/.+\/.+\.js$/);
r.keys().forEach(key => {
    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    moduleExports[attr] = r(key);
});

module.exports = moduleExports;