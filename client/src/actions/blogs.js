export function getPosts(posts){
    return {
        type: 'FETCH_BLOGS_SUCCESS',
        posts
    }
}
