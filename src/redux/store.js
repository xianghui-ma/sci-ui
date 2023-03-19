import {createStore, combineReducers} from 'redux';

import uploadDataReducer from './reducers/SciView.js';

export const buildStore = (sciViewComponents)=>{
    const reducerObj = {};
    sciViewComponents.forEach((item)=>{
        reducerObj[item.props.reduxKey] = uploadDataReducer;
    });
    const rootReducer = combineReducers(reducerObj);
    return createStore(rootReducer);
}