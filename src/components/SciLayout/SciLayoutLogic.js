import styled from "styled-components";

const createNamedAreas = (rows, columns, areas)=>{
    const areaMatrix = [];
    for(let i = 0; i < rows; i++){
        areaMatrix.push(new Array(columns));
    }
    let range = null;
    for(let name in areas){
        range = areas[name].split('/');
        for(let row = Number(range[0]) - 1; row < Number(range[1]); row++){
            for(let column = Number(range[2]) - 1; column < Number(range[3]); column++){
                areaMatrix[row][column] = name;
            }
        }
    }
    
}

export const divideViewArea = (props)=>{
    const {rows, columns, areas, gap} = props;
    createNamedAreas(rows, columns, areas);
    return style = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridGap: `${gap ? gap : '1px'}`
    };
}