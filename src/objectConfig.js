export default {
  get: (obj, propKey) => {
    return obj[propKey]
  },
  set: (obj, propKey, value) => {
    var newObj = Object.assign({}, obj)
    newObj[propKey] = value
    return newObj;
  },
  getKeys: obj => {
    return Object.keys(obj)
  },
  isObject: item => {
    return typeof item === 'object'
  },
  isArrayOrList: item => {
    return Array.isArray(item)
  },
  push: (arr, item) => {
    return arr.concat([item])
  },
  clone: obj => {
    return Object.assign({}, obj)
  },
}