import React from 'react';
import PropTypes from 'prop-types';

import {setViewTitle, setViewPosition, setProportion} from './SciViewLogic.js';

function SciView(props) {
  return (
    <section style={setViewPosition(props)}>
      {setViewTitle(props)}
      <section style={setProportion()}>
        {props.children}
      </section>
    </section>
  );
}

// 属性类型和必要性限制
SciView.propTypes = {
  // 视图位置，'起始行/终止行/起始列/终止列'
  position: PropTypes.string.isRequired,
  // 视图背景颜色，默认#fff
  viewBgColor: PropTypes.string,
  // 是否需要Title
  title: PropTypes.string,
  // title是否需要占用视图位置，true占用 | false不占用
  titleOccupy: PropTypes.bool,
  // title文本位置，值有left | center | right，默认center
  titlePosition: PropTypes.string,
  // title背景颜色，默认transparent
  titleBgColor: PropTypes.string,
  // title文本颜色，默认#000
  titleColor: PropTypes.string,
  // title文本是否加粗，默认normal
  titleWeight: PropTypes.number,
  // title字体大小，默认1rem
  titleFontSize: PropTypes.string
};

export default SciView;