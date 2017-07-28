export default function menus(state = [], action){
    if(action.type === 'FETCH_MENU_SUCCESS'){
        console.log('Fetch');
        return action.payload;
    }

    return state;
}