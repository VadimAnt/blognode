import axios from 'axios';

export const asyncGetMenus = () => dispatch => {
    axios.get('http://localhost:3001/')
        .then(res => {
            dispatch({ type: 'FETCH_MENU_SUCCESS', payload: res.data.menu });
        });
};
