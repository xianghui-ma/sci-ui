import React from 'react';

export const setTitle = (props)=>{
    const {title, titleHeight, titlePosition, titleBgColor, titleColor} = props;
    return (
        title ? <h1 style={{
            height: `${parseFloat(titleHeight)}vh`,
            textAlign: titlePosition || 'center',
            margin: 0,
            lineHeight: `${parseFloat(titleHeight)}vh`,
            backgroundColor: titleBgColor || '#ccc',
            color: titleColor || '#000'
        }}>{title}</h1> : null
    );
}

export const divideViewArea = (props)=>{
    const {rows, columns, gap, gapColor, titleHeight, title} = props;
    return {
        width: '100vw',
        height: `${title ? 100 - parseFloat(titleHeight) : 100}vh`,
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridGap: gap || '1px',
        backgroundColor: gapColor || '#ccc'
    };
}