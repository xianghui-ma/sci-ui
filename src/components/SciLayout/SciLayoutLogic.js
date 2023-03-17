import React from 'react';

export const setTitle = (props)=>{
    const {title, titleHeight, titlePosition, titleBgColor, titleColor, titleFontSize} = props;
    return (
        title ? <h1 style={{
            textAlign: titlePosition || 'center',
            margin: 0,
            backgroundColor: titleBgColor || '#ccc',
            color: titleColor || '#000',
            fontSize: titleFontSize || '1.5rem'
        }}>{title}</h1> : null
    );
}

export const divideViewArea = (props)=>{
    const {rows, columns, gap, gapColor, titleHeight, title} = props;
    return {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridGap: gap || '1px',
        backgroundColor: gapColor || '#ccc'
    };
}

// 设置title和视图容器大小占比
export const setProportion = ()=>{
    return {
        flexGrow: '1'
    }
}

// 设置系统容器为flex布局
export const setSystemDisplay = ()=>{
    return {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    };
}