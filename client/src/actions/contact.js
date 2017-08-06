import axios from 'axios';
export const sendApiContact = (data) => dispatch =>{
    fetch('http://localhost:3001/contact', {
        method: 'post',
        body: data
    }, {withCredentials:true})
    .then(res => {
        // dispatch({
        //     type: 'FETCH_BLOGS_SUCCESS',
        //     posts
        // });
    });
};