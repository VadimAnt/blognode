import axios from 'axios';

export const asyncGetBlogs = () => dispatch => {
    axios.get('http://localhost:3001/blog')
        .then(res => {
            dispatch({ type: 'FETCH_BLOGS_SUCCESS', payload: res.data.blogs });
        });
};

export const asyncGetSingleBlog = (id) => dispatch => {
    axios.get('http://localhost:3001/blog/' + id )
        .then(res => {
            dispatch({ type: 'FETCH_SINGLE_SUCCESS', payload: res.data.post });
        });
};
