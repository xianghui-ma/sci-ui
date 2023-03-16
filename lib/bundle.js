'use strict';

var React = require('react');
var PropTypes = require('prop-types');
require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var createNamedAreas = function createNamedAreas(rows, columns, areas) {
  var areaMatrix = [];
  for (var i = 0; i < rows; i++) {
    areaMatrix.push(new Array(columns));
  }
  var range = null;
  for (var name in areas) {
    range = areas[name].split('/');
    for (var row = Number(range[0]) - 1; row < Number(range[1]); row++) {
      for (var column = Number(range[2]) - 1; column < Number(range[3]); column++) {
        areaMatrix[row][column] = name;
      }
    }
  }
  console.log(areaMatrix);
};
var divideViewArea = function divideViewArea(props) {
  var rows = props.rows,
    columns = props.columns,
    areas = props.areas,
    gap = props.gap;
  createNamedAreas(rows, columns, areas);
  return style = {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: "repeat(".concat(columns, ", 1fr)"),
    gridTemplateRows: "repeat(".concat(rows, ", 1fr)"),
    gridGap: "".concat(gap ? gap : '1px')
  };
};

function SciLayout(props) {
  return /*#__PURE__*/React__default["default"].createElement("section", {
    style: divideViewArea(props)
  });
}

// 属性类型和必要性限制
SciLayout.propTypes = {
  // 将页面划分为多少行
  rows: PropTypes__default["default"].number.isRequired,
  // 将页面划分为多少列
  columns: PropTypes__default["default"].number.isRequired,
  // 网格间距，默认值为1px
  gap: PropTypes__default["default"].string,
  // 划定区域，并给区域取名
  // {areaName: '起始列/终止列/起始行/终止行'}
  areas: PropTypes__default["default"].object.isRequired
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
