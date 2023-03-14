'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function SciLayout() {
  return /*#__PURE__*/React__default["default"].createElement("section", null);
}
SciLayout.propTypes = {
  rows: PropTypes__default["default"].number,
  columns: PropTypes__default["default"].number
};

function SciHeader() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, "SciHeader");
}

function SciView() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, "SciView");
}

var index = {
  SciLayout: SciLayout,
  SciHeader: SciHeader,
  SciView: SciView
};

module.exports = index;
