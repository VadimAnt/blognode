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

export const getApiPost = (id) => dispatch =>{
    axios.get('http://localhost:3001/blog/' + id)
        .then(res => {
            let post = res.data.post;
            dispatch({
                type: 'FETCH_SINGLE_SUCCESS',
                post
            });
        });
};