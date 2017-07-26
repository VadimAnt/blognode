export const asyncGetMenus = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_MENU_SUCCESS', payload: []});
    };
};