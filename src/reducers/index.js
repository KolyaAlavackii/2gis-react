import { combineReducers } from 'redux';
import { default as map } from './map';
import { default as user } from './user';
import { default as messages } from './messages';

const rootReducer = combineReducers({
    messages,
    map,
    user
});

export default rootReducer;