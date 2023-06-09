'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

// 设置系统title
var setTitle = function setTitle(props) {
  var title = props.title,
    titlePosition = props.titlePosition,
    titleBgColor = props.titleBgColor,
    titleColor = props.titleColor,
    titleFontSize = props.titleFontSize;
  return title ? /*#__PURE__*/React__default["default"].createElement("h1", {
    style: {
      textAlign: titlePosition || 'center',
      margin: 0,
      backgroundColor: titleBgColor || '#ccc',
      color: titleColor || '#000',
      fontSize: titleFontSize || '1.5rem'
    }
  }, title) : null;
};

// grid布局网格划分
var divideViewArea = function divideViewArea(props) {
  var rows = props.rows,
    columns = props.columns,
    gap = props.gap,
    gapColor = props.gapColor;
  return {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: "repeat(".concat(columns, ", 1fr)"),
    gridTemplateRows: "repeat(".concat(rows, ", 1fr)"),
    gridGap: gap || '1px',
    backgroundColor: gapColor || '#ccc'
  };
};

// 设置title和视图容器大小占比
var setProportion$1 = function setProportion() {
  return {
    flexGrow: '1'
  };
};

// 设置系统容器为flex布局
var setSystemDisplay = function setSystemDisplay() {
  return {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };
};

function SciLayout(props) {
  return /*#__PURE__*/React__default["default"].createElement("section", {
    style: setSystemDisplay()
  }, setTitle(props), /*#__PURE__*/React__default["default"].createElement("section", {
    style: setProportion$1()
  }, /*#__PURE__*/React__default["default"].createElement("section", {
    style: divideViewArea(props)
  }, props.children)));
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
  // title文本位置，值有left | center | right，默认center
  titlePosition: PropTypes__default["default"].string,
  // title背景颜色，默认#ccc
  titleBgColor: PropTypes__default["default"].string,
  // title文本颜色，默认#000
  titleColor: PropTypes__default["default"].string,
  // title字体大小，默认1.5rem
  titleFontSize: PropTypes__default["default"].string
};

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
  var position = props.position,
    viewBgColor = props.viewBgColor;
  position = position.split('/');
  return {
    gridColumn: "".concat(Number(position[2]), " / ").concat(Number(position[3]) + 1),
    gridRow: "".concat(Number(position[0]), " / ").concat(Number(position[1]) + 1),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: viewBgColor || '#fff'
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
  // 视图背景颜色，默认#fff
  viewBgColor: PropTypes__default["default"].string,
  // 是否需要Title
  title: PropTypes__default["default"].string,
  // title是否需要占用视图位置，true占用 | false不占用
  titleOccupy: PropTypes__default["default"].bool,
  // title文本位置，值有left | center | right，默认center
  titlePosition: PropTypes__default["default"].string,
  // title背景颜色，默认transparent
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
  SciView: SciView
};

module.exports = index;
