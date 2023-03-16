export const setViewPosition = (props)=>{
    let {position} = props;
    position = position.split('/');
    return {
        gridColumn: `${Number(position[2])} / ${Number(position[3]) + 1}`,
        gridRow: `${Number(position[0])} / ${Number(position[1]) + 1}`,
    }
}