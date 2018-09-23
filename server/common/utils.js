// 判断数据类型

const getType = data => {
  let type = Object.prototype.toString.call(data)
  let rtype = ''
  switch(type) {
    case '[object Object]':
      rtype = 'object'
      break;
    case '[object Array]':
      rtype = 'array'
      break;
    case '[object String]':
      rtype = 'string'
      break;
    case '[object Number]':
      rtype = 'number'
      break;
    case '[object Boolean]':
      rtype = 'boolean'
      break;
    case '[object Date]':
      rtype = 'date'
      break;
    case '[object Function]':
      rtype = 'function'
      break;
  }
  return rtype
}

exports.Utils = {
  isObject (data) {
    return getType(data) === 'object'
  },
  isArray (data) {
    return getType(data) === 'array'
  },
  isString (data) {
    return getType(data) === 'string'
  },
  isBoolean (data) {
    return getType(data) === 'boolean'
  },
  isFunction (data) {
    return getType(data) === 'function'
  },
  isNumber (data) {
    return getType(data) === 'number'
  },
  isDate (data) {
    return getType(data) === 'date'
  },
}