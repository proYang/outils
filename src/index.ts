/**
 * @desc webpack打包入口文件  
 * @todo webpack目前require.context只兼容CommonJS规范，无法使用es6模块
 */
interface RequireContext {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
}

let moduleExports: object = {};

const r: RequireContext = require.context('./', true, /^\.\/.+\/.+\.ts$/);
r.keys().forEach(key => {
  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  moduleExports[attr] = r(key).default;
});

module.exports = moduleExports;