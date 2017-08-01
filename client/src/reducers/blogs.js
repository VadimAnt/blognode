
const initialState = {
    posts: [],
    post: []
}




export default function menus(state = initialState, action){
    switch(action.type){
        case 'FETCH_BLOGS_SUCCESS':
            return {
                ...state,
                posts: action.payload
            };
            break;
        case 'FETCH_SINGLE_SUCCESS':
            return [
                ...state,
                { post: action.payload }
            ];
            break;
    }

    return state;
}