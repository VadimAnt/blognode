import axios from 'axios';
export const getApiPosts = () => dispatch =>{
    axios.get('http://localhost:3001/blog')
        .then(res => {
            let posts = res.data.posts;
            dispatch({
                type: 'FETCH_BLOGS_SUCCESS',
                posts
            });
        });
};