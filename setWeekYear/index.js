'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setWeekYear;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfWeekYear/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../differenceInCalendarDays/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} weekYear - the local week-numbering year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week-numbering year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004, {weekStartsOn: 1, firstWeekContainsDate: 4})
 * //=> Sat Jan 01 2005 00:00:00
 */
function setWeekYear(dirtyDate, dirtyWeekYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate === undefined ? 1 : Number(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate === undefined ? defaultFirstWeekContainsDate : Number(options.firstWeekContainsDate);

  var date = (0, _index2.default)(dirtyDate, dirtyOptions);
  var weekYear = Number(dirtyWeekYear);
  var diff = (0, _index6.default)(date, (0, _index4.default)(date, dirtyOptions), dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  date = (0, _index4.default)(firstWeek, dirtyOptions);
  date.setDate(date.getDate() + diff);
  return date;
}
module.exports = exports['default'];