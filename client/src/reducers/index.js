import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import  menus  from './menus';


export default combineReducers({
    routing: routeReducer,
    menus
});