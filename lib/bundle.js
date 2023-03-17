'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var setTitle = function setTitle(props) {
  var title = props.title,
    titleHeight = props.titleHeight,
    titlePosition = props.titlePosition,
    titleBgColor = props.titleBgColor,
    titleColor = props.titleColor;
  return title ? /*#__PURE__*/React__default["default"].createElement("h1", {
    style: {
      height: "".concat(parseFloat(titleHeight), "vh"),
      textAlign: titlePosition || 'center',
      margin: 0,
      lineHeight: "".concat(parseFloat(titleHeight), "vh"),
      backgroundColor: titleBgColor || '#ccc',
      color: titleColor || '#000'
    }
  }, title) : null;
};
var divideViewArea = function divideViewArea(props) {
  var rows = props.rows,
    columns = props.columns,
    gap = props.gap,
    gapColor = props.gapColor,
    titleHeight = props.titleHeight,
    title = props.title;
  return {
    width: '100vw',
    height: "".concat(title ? 100 - parseFloat(titleHeight) : 100, "vh"),
    display: 'grid',
    gridTemplateColumns: "repeat(".concat(columns, ", 1fr)"),
    gridTemplateRows: "repeat(".concat(rows, ", 1fr)"),
    gridGap: gap || '1px',
    backgroundColor: gapColor || '#ccc'
  };
};

function SciLayout(props) {
  return /*#__PURE__*/React__default["default"].createElement("section", null, setTitle(props), /*#__PURE__*/React__default["default"].createElement("section", {
    style: divideViewArea(props)
  }, props.children));
}

// 属性类型和必要性限制
SciLayout.propTypes = {
  // 将页面划分为多少行
  rows: PropTypes__default["default"].number.isRequired,
  // 将页面划分为多少列
  columns: PropTypes__default["default"].number.isRequired,
  // 网格间距，默认值为1px
  gap: PropTypes__default["default"].string,
  // 网格间隔线条的颜色，默认#ccc
  gapColor: PropTypes__default["default"].string,
  // 是否需要Title
  title: PropTypes__default["default"].string,
  // title高度，输入为百分比
  titleHeight: PropTypes__default["default"].string,
  // title文本位置，值有left | center | right，默认center
  titlePosition: PropTypes__default["default"].string,
  // title背景颜色，默认#ccc
  titleBgColor: PropTypes__default["default"].string,
  // title文本颜色，默认#000
  titleColor: PropTypes__default["default"].string
};

function SciHeader(props) {
  return /*#__PURE__*/React__default["default"].createElement("header", null, props.children);
}

// 设置title
var setViewTitle = function setViewTitle(props) {
  var title = props.title,
    titleOccupy = props.titleOccupy,
    titlePosition = props.titlePosition,
    titleBgColor = props.titleBgColor,
    titleColor = props.titleColor,
    titleWeight = props.titleWeight,
    titleFontSize = props.titleFontSize;
  return title ? /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      margin: 0,
      width: '100%',
      position: titleOccupy ? 'static' : 'absolute',
      textAlign: titlePosition || 'center',
      backgroundColor: titleBgColor || 'transparent',
      color: titleColor || '#000',
      fontWeight: titleWeight || 'normal',
      fontSize: titleFontSize || '1rem'
    }
  }, title) : null;
};

// 确定视图绘制区域位置
var setViewPosition = function setViewPosition(props) {
  var position = props.position;
  position = position.split('/');
  return {
    gridColumn: "".concat(Number(position[2]), " / ").concat(Number(position[3]) + 1),
    gridRow: "".concat(Number(position[0]), " / ").concat(Number(position[1]) + 1),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  };
};

// 设置title和视图容器大小占比
var setProportion = function setProportion() {
  return {
    flexGrow: '1'
  };
};

function SciView(props) {
  return /*#__PURE__*/React__default["default"].createElement("section", {
    style: setViewPosition(props)
  }, setViewTitle(props), /*#__PURE__*/React__default["default"].createElement("section", {
    style: setProportion()
  }, props.children));
}

// 属性类型和必要性限制
SciView.propTypes = {
  // 视图位置，'起始行/终止行/起始列/终止列'
  position: PropTypes__default["default"].string.isRequired,
  // 是否需要Title
  title: PropTypes__default["default"].string,
  // title是否需要占用视图位置，true占用 | false不占用
  titleOccupy: PropTypes__default["default"].bool,
  // title文本位置，值有left | center | right，默认center
  titlePosition: PropTypes__default["default"].string,
  // title背景颜色，默认#ccc
  titleBgColor: PropTypes__default["default"].string,
  // title文本颜色，默认#000
  titleColor: PropTypes__default["default"].string,
  // title文本是否加粗，默认normal
  titleWeight: PropTypes__default["default"].number,
  // title字体大小，默认1rem
  titleFontSize: PropTypes__default["default"].string
};

var index = {
  SciLayout: SciLayout,
  SciHeader: SciHeader,
  SciView: SciView
};

module.exports = index;
