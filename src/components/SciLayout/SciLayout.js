import {useRef} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import {divideViewArea, setTitle, setProportion, setSystemDisplay} from './SciLayoutLogic.js';
import {buildContainerAndStore} from '../../container/SciView.js';

function SciLayout(props) {
  const storeRef = useRef(null);
  return (
    <Provider store={storeRef.current}>
      <section style={setSystemDisplay()}>
        {setTitle(props)}
        <section style={setProportion()}>
          <section style={divideViewArea(props)}>
            {buildContainerAndStore(props.children)}
          </section>
        </section>
      </section>
    </Provider>
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
    gapColor: PropTypes.string,
    // 是否需要Title
    title: PropTypes.string,
    // title文本位置，值有left | center | right，默认center
    titlePosition: PropTypes.string,
    // title背景颜色，默认#ccc
    titleBgColor: PropTypes.string,
    // title文本颜色，默认#000
    titleColor: PropTypes.string,
    // title字体大小，默认1.5rem
    titleFontSize: PropTypes.string
};

export default SciLayout;