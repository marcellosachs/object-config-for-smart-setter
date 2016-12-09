const objectConfig = {
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
  isObjectOrMap: item => {
    return typeof item === 'object'
  },
  isArrayOrList: item => {
    return Array.isArray(item)
  },
  push: (arr, item) => {
    return arr.concat([item])
  },
  clone: item => {
    const isArray = Array.isArray(item)
    // make sure Array condition comes first, since Arrays are also objects
    if (Array.isArray(item)) {
      return Object.assign([], item)
    } else if (typeof(item) === 'object') {
      return Object.assign({}, item)
    } else {
      return item
    }
  },
  emptyObjectOrMap: () => {
    return {}
  },
  emptyListOrArray: () => {
    return []
  },
  toThisConfigsType: item => item,
  merge: (obj1, obj2) => {
    return Object.assign({}, obj1, obj2)
  },
}

export default objectConfig
