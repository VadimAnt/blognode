import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menus from './menu';
import posts from './blogs';

export default combineReducers({
    routing: routerReducer,
    menu: menus,
    posts: posts
});