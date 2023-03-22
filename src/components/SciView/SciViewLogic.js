import React from 'react';

// 设置title
export const setViewTitle = (props)=>{
    const {title, titleOccupy, titlePosition, titleBgColor, titleColor, titleWeight, titleFontSize} = props;
    return (
        title ? <p style={{
            margin: 0,
            width: '100%',
            position: titleOccupy ? 'static' : 'absolute',
            textAlign: titlePosition || 'center',
            backgroundColor: titleBgColor || 'transparent',
            color: titleColor || '#000',
            fontWeight: titleWeight || 'normal',
            fontSize: titleFontSize || '1rem'
        }}>{title}</p> : null
    );
}

// 确定视图绘制区域位置
export const setViewPosition = (props)=>{
    let {position, viewBgColor} = props;
    position = position.split('/');
    return {
        gridColumn: `${Number(position[2])} / ${Number(position[3]) + 1}`,
        gridRow: `${Number(position[0])} / ${Number(position[1]) + 1}`,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: viewBgColor || '#fff'
    }
}

// 设置title和视图容器大小占比
export const setProportion = ()=>{
    return {
        flexGrow: '1'
    }
}