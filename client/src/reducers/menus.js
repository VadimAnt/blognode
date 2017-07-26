let initialState = {
    menus: [
        'Blog',
        'About us',
        'Contact',
        'News'
    ]
};

export default function menus(state = initialState, action){
    if(action.type === 'GET_MENU'){
        return [
            ...state,
            [...state.menus, action.payload]
        ]
    }

    return state;
}