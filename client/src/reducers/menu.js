export default function menus(state = [], action){
    if(action.type === 'FETCH_MENU_SUCCESS'){
        return action.payload;
    }

    return state;
}