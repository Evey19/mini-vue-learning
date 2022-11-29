export * from '../src/shapeFlags'
export * from '../src/toDisplayString'

export const isObject = (val) => {
  return val !== null && typeof val === 'object'
}

export const isString = (val) => typeof val === 'string'

const camelizeRE = /-(\w)/g
export const camelize = (str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

export const extend = Object.assign

export const isOn = (key) => /^on[A-Z]/.test(key)

export function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue)
}

export function hasOwn(val, key) {
  return Object.prototype.hasOwnProperty.call(val, key)
}

export const capitalize = (str: string) => {
  str.charAt(0).toUpperCase() + str.slice(1)
}

export const toHandlerKey = (str: string) => {
  str ? `on${capitalize(str)}` : ``
}

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = (str:string)=>{
  str.replace(hyphenateRE,'-$1').toLowerCase()
}