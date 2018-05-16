'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatLong = (0, _index2.default)({
  LT: 'H:mm',
  LTS: 'H:mm:ss',
  L: 'DD.MM.YYYY',
  LL: 'D. MMMMM YYYY',
  LLL: 'D. MMMMM YYYY H:mm',
  LLLL: 'dddd, D. MMMMM YYYY H:mm'
});

exports.default = formatLong;
module.exports = exports['default'];