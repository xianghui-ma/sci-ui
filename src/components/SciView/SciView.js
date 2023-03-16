import React from 'react';
import PropTypes from 'prop-types';

import {setViewPosition} from './SciViewLogic.js';

function SciView(props) {
  console.log(props);
  return (
    <section style={setViewPosition(props)}>
      {props.children}
    </section>
  )
}

// 属性类型和必要性限制
SciView.propTypes = {
  // 视图位置，即网格区域名称
  position: PropTypes.string.isRequired
};

export default SciView;