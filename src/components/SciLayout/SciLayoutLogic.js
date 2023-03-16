
export const divideViewArea = (props)=>{
    const {rows, columns, gap, bgColor} = props;
    return style = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridGap: `${gap ? gap : '1px'}`,
        backgroundColor: `${bgColor ? bgColor : '#ccc'}`
    };
}