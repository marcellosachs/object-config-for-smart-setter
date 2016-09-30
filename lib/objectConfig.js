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
  clone: function clone(obj) {
    return Object.assign({}, obj);
  },
  emptyObjectOrMap: function emptyObjectOrMap() {
    return {};
  },
  emptyListOrArray: function emptyListOrArray() {
    return [];
  },
  toThisConfigsType: function toThisConfigsType(item) {
    return item;
  }
};

exports.default = objectConfig;