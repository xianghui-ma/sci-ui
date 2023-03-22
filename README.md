<h2 align="center">sciUi</h2>

### 背景
***

<img src="https://raw.githubusercontent.com/xianghui-ma/staticImage/master/sci-ui1.png"/>

如上图所示，论文中的可视化系统整体布局形式单一，且实际中各视图位置经常需要根据导师意见进行调整。为此基于**React**封装了一个**sciUi**组件库。该组件库对上述特点进行了封装，避免了可视化系统搭建过程中的重复性工作，能帮助提升开发效率。

### 组件展示
***

<img src="https://raw.githubusercontent.com/xianghui-ma/staticImage/master/sci-ui2.png"/>

### 用法
***

**Step1:** 首先下载npm包：
`npm i sci-ui`

**Step2:** 引入组件：
`import {SciLayout, SciView} from 'sci-glyph'`

**Step3:** 使用组件：
```
<SciView position={'5/6/1/6'} title='View NO.3 Title' titlePosition='center' titleBgColor={'#bbb'} titleWeight={600} titleFontSize={'1rem'} titleOccupy={true} titleColor={'#000'}>Content Area</SciView>
```

#### SciLayout组件

**SciLayout**组件是容器组件，**SciView**组件应作为**SciLayout**组件的直接子元素。其属性配置项如下：

| 配置项 | 含义 | 值类型 | 必填项 |
| :----: | :----: | :----: | :----: |
| rows | 将页面划分为多少行 | Number | 是 |
| columns | 将页面划分为多少列 | Number | 否 |
| gap | 网格间距，默认值为1px | String | 否 |
| gapColor | 网格间隔线条的颜色，默认#ccc | String | 否 |
| title | 是否需要Title | String | 否 |
| titlePosition | title文本位置，值有left、center、right，默认center | String | 否 |
| titleBgColor | title背景颜色，默认#ccc | String | 否 |
| titleColor | title文本颜色，默认#000 | String | 否 |
| titleFontSize | title字体大小，默认1.5rem | String | 否 |

#### SciView组件

**SciView**组件是视图容器组件，**SciView**组件应作为**SciLayout**组件的直接子元素。其属性配置项如下：

| 配置项 | 含义 | 值类型 | 必填项 |
| :----: | :----: | :----: | :----: |
| position | 视图位置，'起始行/终止行/起始列/终止列' | String | 是 |
| viewBgColor | 视图背景颜色，默认#fff | String | 否 |
| title | 是否需要Title | String | 否 |
| titleOccupy | title是否需要占用视图位置，true占用、false不占用 | Boolean | 否 |
| titlePosition | title文本位置，值有left、center、right，默认center | String | 否 |
| titleBgColor | title背景颜色，默认transparent | String | 否 |
| titleColor | title文本颜色，默认#000 | String | 否 |
| titleWeight | title文本是否加粗，默认normal | Number | 否 |
| titleFontSize | title字体大小，默认1rem | String | 否 |

### 使用示例
***

```
/* App.js */
import {SciLayout} from 'sci-ui';

import ViewOne from './components/ViewOne/ViewOne.jsx';

function App() {
  return (
    <div className="App">
      <SciLayout rows={6} gapColor={'#000'} columns={6} gap={'2px'} title='System Title' titleHeight='3%' titleBgColor={'#fff'}>
      </SciLayout>
    </div>
  );
}

/* ViewOne.jsx */
import {SciView} from 'sci-ui';

export default function ViewOne(props) {
  return (
    <SciView reduxKey='V1' position={'1/4/1/3'} title='View NO.1 Title' titlePosition='center' titleBgColor={'#bbb'} titleWeight={600} titleFontSize={'1rem'} titleOccupy={true} titleColor={'#000'}>Content Area</SciView>
  );
}
```