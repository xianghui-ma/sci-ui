import React from 'react';
import PropTypes from 'prop-types';

import {divideViewArea} from './SciLayoutLogic.js';

function SciLayout(props) {
  return (
    <section style={divideViewArea(props)}>
      {props.children}
    </section>
  );
}

// 属性类型和必要性限制
SciLayout.propTypes = {
    // 将页面划分为多少行
    rows: PropTypes.number.isRequired,
    // 将页面划分为多少列
    columns: PropTypes.number.isRequired,
    // 网格间距，默认值为1px
    gap: PropTypes.string,
    // 网格间隔线条的颜色，默认#ccc
    bgColor: PropTypes.string,
    // 划定区域，并给区域取名
    // {areaName: '起始行/终止行-起始列/终止列'}
    areas: PropTypes.object.isRequired
};

export default SciLayout;