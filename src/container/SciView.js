import {connect} from 'react-redux';

import {uploadDataActionCreator} from '../redux/actions/SciView.js';
import {buildStore} from '../redux/store.js';

const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        uploadData: (data)=>{
            dispatch(uploadDataActionCreator(data));
        }
    }
}

export const buildContainerAndStore = (sciViewComponents, storeRef)=>{
    const store = buildStore(sciViewComponents);
    const connectedComponents = [];
    sciViewComponents.forEach((item)=>{
        connectedComponents.push(connect(mapStateToProps, mapDispatchToProps)(item));
    });
    storeRef.current = store;
    return connectedComponents;
}