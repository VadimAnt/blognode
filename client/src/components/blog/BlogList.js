import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogElem from './BlogElem';
import { getApiPosts } from '../../actions/blogs';

class BlogList extends Component {

    componentDidMount(){
        this.props.getPosts();
    }


    render() {
        console.log(this.props)
            return (
                <div className="row">
                    <div>Blogs</div>
                    <div className="row">
                        <div>
                            {
                                this.props.posts.posts.map((item, key) => {
                                    return <BlogElem
                                        title={item.name}
                                        text={item.text}
                                        id={item._id}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            );

    }
}

export default connect(
    state => ({
        posts: state.posts
    }),
    dispatch => ({
        getPosts: () => {
            dispatch(getApiPosts());
        }
    }))(BlogList);