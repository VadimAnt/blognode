export default function menus(state = [], action){
    switch(action.type){
        case 'FETCH_BLOGS_SUCCESS':
            return action.payload;
            break;
        case 'FETCH_SINGLE_SUCCESS':
            return action.payload;
            break;
    }

    return state;
}