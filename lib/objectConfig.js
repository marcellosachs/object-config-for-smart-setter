'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var objectConfig = {
  get: function get(obj, propKey) {
    return obj[propKey];
  },
  set: function set(obj, propKey, value) {
    var newObj = Object.assign({}, obj);
    newObj[propKey] = value;
    return newObj;
  },
  getKeys: function getKeys(obj) {
    return Object.keys(obj);
  },
  isObjectOrMap: function isObjectOrMap(item) {
    return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object';
  },
  isArrayOrList: function isArrayOrList(item) {
    return Array.isArray(item);
  },
  push: function push(arr, item) {
    return arr.concat([item]);
  },
  clone: function clone(item) {
    var isArray = Array.isArray(item);
    // make sure Array condition comes first, since Arrays are also objects
    if (Array.isArray(item)) {
      return Object.assign([], item);
    } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
      return Object.assign({}, item);
    } else {
      return item;
    }
  },
  emptyObjectOrMap: function emptyObjectOrMap() {
    return {};
  },
  emptyListOrArray: function emptyListOrArray() {
    return [];
  },
  toThisConfigsType: function toThisConfigsType(item) {
    return item;
  },
  merge: function merge(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
};

exports.default = objectConfig;