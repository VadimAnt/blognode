
const initialState = {
    posts: [],
    post: []
}


export default function blogs(state = initialState, action){
    switch(action.type){
        case 'FETCH_BLOGS_SUCCESS':
            return {
                ...state,
                posts: action.posts
            };
            break;
        case 'FETCH_SINGLE_SUCCESS':
            return [
                ...state,
                { post: action.post }
            ];
            break;
    }

    return state;
}