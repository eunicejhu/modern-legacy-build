"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arithmatic = exports.default = void 0;

class Logger {
  static log(msg) {
    console.log(msg);
  }

}

class Arithmatic {
  static multiply(x, y) {
    return x * y;
  }

  static divide(x, y) {
    return x / y;
  }

}

exports.Arithmatic = Arithmatic;
var _default = Logger;
exports.default = _default;