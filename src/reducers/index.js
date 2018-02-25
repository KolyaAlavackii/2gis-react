import { combineReducers } from 'redux';
import { default as map } from './map';
import { default as user } from './user';

const rootReducer = combineReducers({
    map,
    user
});

export default rootReducer;