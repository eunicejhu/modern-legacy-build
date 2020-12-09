(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myBundle = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

    class PenguinRandomHouse {
      static getCats() {
        return axios__default['default'].get("https://api.thecatapi.com/v1/breeds");
      }

    }

    exports.PenguinRandomHouse = PenguinRandomHouse;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
