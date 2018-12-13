
declare namespace outils {
  /**
   * 
   * @desc 判断两个数组是否相等
   * @param {Array} arr1 
   * @param {Array} arr2 
   * @return {Boolean}
   */
  export function arrayEqual(arr1: Array<any>, arr2: Array<any>): boolean
  
  /**
   * 
   * @desc   为元素添加class
   * @param  {HTMLElement} ele 
   * @param  {String} cls 
   */
  export function addClass(ele: HTMLElement, cls: string): void
  
  /**
   * 
   * @desc 判断元素是否有某个class
   * @param {HTMLElement} ele 
   * @param {String} cls 
   * @return {Boolean}
   */
  export function hasClass(ele: HTMLElement, cls: string): boolean
 
  /**
   * 
   * @desc 为元素移除class
   * @param {HTMLElement} ele 
   * @param {String} cls 
   */
  export function removeClass(ele: HTMLElement, cls: string): boolean
  
  /**
   * 
   * @desc 根据name读取cookie
   * @param  {String} name 
   * @return {String}
   */
  export function getCookie(name: string): string

  /**
   * 
   * @desc 根据name删除cookie
   * @param  {String} name 
   */
  export function removeCookie(name: string): void

  /**
   * 
   * @desc  设置Cookie
   * @param {String} name 
   * @param {String} value 
   * @param {Number} days 
   */
  export function setCookie(name: string, value: string, days: number): void
  
  /**
   * 
   * @desc 获取浏览器类型和版本
   * @return {String} 
   */
  export function getExplore(): string
 
  /**
   * 
   * @desc 获取操作系统类型
   * @return {String} 
   */
  export function getOS(): void
  
  /**
   * 
   * @desc 获取滚动条距顶部的距离
   */
  export function getScrollTop(): void

  /**
   * 
   * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
   * @param {HTMLElement} ele 
   * @returns { {left: number, top: number} }
   */
  export function offset(ele: HTMLElement): { left: number, top: number }
  
  /**
   * 
   * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
   * @param {Number} to 
   * @param {Number} duration 
   */
  export function scrollTo(to: number, duration: number): void

  /**
   * 
   * @desc 设置滚动条距顶部的距离
   * @param {Number} value
   */
  export function setScrollTop(value: number): void

  /**
   * 
   * @desc H5软键盘缩回、弹起回调
   * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
   * @param {Function} downCb 当软键盘弹起后，缩回的回调
   * @param {Function} upCb 当软键盘弹起的回调
   */
  export function windowResize(downCb: () => void, upCb: () => void): void

  /**
   * @desc 函数防抖 
   * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
   * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
   * @example 适用场景：如在线编辑的自动存储防抖。
   * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
   * @param  {Boolean}  atBegin       可选，默认为false。
   *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
                                      如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
  * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
  *                                  执行去抖动功能时，，调用`callback`。
  *
  * @return {Function} 新的防抖函数。
  */
  export function debounce(delay: number, atBegin?: boolean, callback?: () => void): void
  
  /**
   * @desc   函数节流。
   * 适用于限制`resize`和`scroll`等函数的调用频率
   *
   * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
   * @param  {Boolean}   noTrailing     可选，默认为false。
   *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。
   *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.
   *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）
   * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
   *                                    执行去节流功能时，调用`callback`。
   * @param  {Boolean}   debounceMode   如果`debounceMode`为true，`clear`在`delay`ms后执行。
   *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。
   *
   * @return {Function}  新的节流函数
   */
  export function throttle(delay: number, noTrailing?: boolean, callback?: () => void, debounceMode?: boolean): void

  /**
   * @desc 根据keycode获得键名
   * @param  {Number} keycode 
   * @return {String}
   */
  export function getKeyName(keycode: number): string

  /**
   * @desc 深拷贝，支持常见类型
   * @param {Any} values
   * @return {Any}
   */
  export function deepClone(values: any): any
  
  /**
   * 
   * @desc   判断`obj`是否为空
   * @param  {Object} obj
   * @return {Boolean}
   */
  export function isEmptyObject(obj: object): boolean

  /**
   * 
   * @desc 随机生成颜色
   * @return {String} 
   */
  export function randomColor(): string

  /**
   * 
   * @desc 生成指定范围[min, max]的随机数
   * @param  {Number} min 
   * @param  {Number} max 
   * @return {Number} 
   */
  export function randomNum(min: number, max: number): number

  /**
   * 
   * @desc 判断是否为16进制颜色，rgb 或 rgba
   * @param  {String}  str
   * @return {Boolean} 
   */
  export function isColor(str: string): boolean
 
  /**
   * 
   * @desc   判断是否为邮箱地址
   * @param  {String}  str
   * @return {Boolean} 
   */
  export function isEmail(str: string): boolean
 
  /**
   * 
   * @desc  判断是否为身份证号
   * @param  {String|Number} str 
   * @return {Boolean}
   */
  export function isIdCard(str: string | number): boolean
 
  /**
   * 
   * @desc   判断是否为手机号
   * @param  {String|Number} str 
   * @return {Boolean} 
   */
  export function isPhoneNum(str: string | number): boolean
 
  /**
   * 
   * @desc   判断是否为URL地址
   * @param  {String} str 
   * @return {Boolean}
   */
  export function isUrl(str: string): boolean

  /**
   * 
   * @desc   现金额转大写
   * @param  {Number} n 
   * @return {String}
   */
  export function digitUppercase(n: number): string

  /**
   * 
   * @desc 判断浏览器是否支持webP格式图片
   * @return {Boolean} 
   */
  export function isSupportWebP(): boolean

  /**
   * @desc   格式化${startTime}距现在的已过时间
   * @param  {Date} startTime 
   * @return {String}
   */
  export function formatPassTime(startTime: Date): string
  /**
   * 
   * @desc   格式化现在距${endTime}的剩余时间
   * @param  {Date} endTime  
   * @return {String}
   */
  export function formatRemainTime(endTime: Date): string
  /**
   * 
   * @desc 是否为闰年
   * @param {Number} year
   * @returns {Boolean}
   */
  export function isLeapYear(year: number): boolean
  /**
   * @desc   判断是否为同一天
   * @param  {Date} date1 
   * @param  {Date} date2 可选／默认值：当天
   * @return {Boolean}
   */
  export function isSameDay(date1: Date, date2: Date): boolean
  /**
   * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
   * @param { Date | String } startTime
   * @param { Date | String } endTime
   * @returns { Object } { d, h, m, s } 天 时 分 秒
   */
  export function timeLeft(startTime: Date | string, endTime: Date | string): { d: number, h: number, m: number, s: number }

  /**
   * 
   * @desc   url参数转对象
   * @param  {String} url  default: window.location.href
   * @return {Object} 
   */
  export function parseQueryString(url?: URL): object
  
  /**
   * 
   * @desc   对象序列化
   * @param  {Object} obj 
   * @return {String}
   */
  export function stringfyQueryString(obj: object): string

}

declare module "outils" {
  export = outils
}
