import axios from 'axios';
import { getPosts, getSinglePost } from '../actions/blogs';
import { store } from '../createStore';

export const getApiPosts = () => {
    axios.get('http://localhost:3001/blog')
        .then(res => {
            store.dispatch(getPosts(res.data));
        });
};

// export const getApiSinglePost = (id) => {
//     axios.get('http://localhost:3001/blog/' + id )
//         .then(res => {
//             store.dispatch({ type: 'FETCH_SINGLE_SUCCESS', payload: res.data.post });
//         });
// };