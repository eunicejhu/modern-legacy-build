"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PenguinRandomHouse = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PenguinRandomHouse {
  static getCats() {
    return _axios.default.get("https://api.thecatapi.com/v1/breeds");
  }

}

exports.PenguinRandomHouse = PenguinRandomHouse;