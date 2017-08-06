import axios from 'axios';
export const sendApiContact = (data) => dispatch =>{
    fetch('http://localhost:3001/contact', {
        method: 'post',
        // headers: {
        //     // 'Accept': 'multipart/form-data, application/xml, text/plain, text/html, *.*',
        //     //'Content-Type': 'multipart/form-data'
        // },
        body: data
    })
    .then(res => {
        // dispatch({
        //     type: 'FETCH_BLOGS_SUCCESS',
        //     posts
        // });
    });
};