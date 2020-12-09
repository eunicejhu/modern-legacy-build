"use strict";

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports.delayedMultiply = exports.substract = exports.add = void 0;

var _logger = require("./logger");

var add = (x, y) => x + y;

exports.add = add;

var substract = (x, y) => x - y;

exports.substract = substract;

var delayedMultiply = (x, y) => new Promise(resolve => {
  setTimeout(resolve(x * y), 1000);
});

exports.delayedMultiply = delayedMultiply;

var multiply = (x, y) => _logger.Arithmatic.multiply(x, y);

exports.multiply = multiply;