import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menus from './menu';
import blogs from './blogs';

export default combineReducers({
    routing: routerReducer,
    menus,
    blogs
});