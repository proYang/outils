
declare namespace outils {
  /**
   * array
   */
  export function arrayEqual(arr1: Array<any>, arr2: Array<any>): boolean
  /**
   * class
   */
  export function addClass(ele: HTMLElement, cls: string): void
  export function hasClass(ele: HTMLElement, cls: string): boolean
  export function removeClass(ele: HTMLElement, cls: string): boolean
  /**
   * cookie
   */
  export function getCookie(name: string): string
  export function removeCookie(name: string): void
  export function setCookie(name: string, value: string, days: number): void
  /**
   * device
   */
  export function getExplore(): string
  export function getOS(): void
  /**
   * dom
   */
  export function getScrollTop(): void
  export function offset(ele: HTMLElement): { left: number, top: number }
  export function scrollTo(to: number, duration: number): void
  export function setScrollTop(value: number): void
  export function windowResize(downCb: () => void, upCb: () => void): void
  /**
   * function
   */
  export function debounce(delay: number, atBegin?: boolean, callback?: () => void): void
  export function throttle(delay: number, noTrailing?: boolean, callback?: () => void, debounceMode?: boolean): void
  /**
   * keycode
   */
  export function getKeyName(keycode: number): string
  /**
   * object
   */
  export function deepClone(values: any): any
  export function isEmptyObject(obj: object): boolean
  /**
   * random
   */
  export function randomColor(): string
  export function randomNum(min: number, max: number): number
  /**
   * regexp
   */
  export function isEmail(str: string): boolean
  export function isIdCard(str: string | number): boolean
  export function isPhoneNum(str: string | number): boolean
  export function isUrl(str: string): boolean
  /**
   * string
   */
  export function digitUppercase(n: number): string
  /**
   * support
   */
  export function isSupportWebP(): boolean
  /**
   * time
   */
  export function formatPassTime(startTime: Date): string
  export function formatRemainTime(endTime: Date): string
  export function isLeapYear(year: number): boolean
  export function isSameDay(date1: Date, date2: Date): boolean
  export function timeLeft(startTime: Date | string, endTime: Date | string): { d: number, h: number, m: number, s: number }
  /**
   * url
   */
  export function parseQueryString(url?: URL): object
  export function stringfyQueryString(obj: object): string

}

declare module "outils" {
  export = outils
}
