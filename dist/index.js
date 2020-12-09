'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

class PenguinRandomHouse {
  static getCats() {
    return axios__default['default'].get("https://api.thecatapi.com/v1/breeds");
  }

}

exports.PenguinRandomHouse = PenguinRandomHouse;
