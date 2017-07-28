import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import  menus  from './menu';

export default combineReducers({
    routing: routerReducer,
    menus
});