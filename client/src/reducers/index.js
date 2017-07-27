import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import  menus  from './menus';


export default combineReducers({
    routing: routerReducer,
    menus
});