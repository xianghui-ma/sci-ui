import {UPLOADDATA} from '../type.js';

const uploadDataReducer = (preState=0, action)=>{
    switch(action.type){
        case UPLOADDATA: {
            return action.data;
        }
    }
}

export default uploadDataReducer;