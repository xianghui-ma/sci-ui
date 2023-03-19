import {UPLOADDATA} from '../type.js';

// 创建将数据放入数据共享池的action对象
export const uploadDataActionCreator = (data)=>{
    return {
        type: UPLOADDATA,
        data
    };
}