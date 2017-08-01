import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogElem from './BlogElem';
import * as postApi from '../../api/posts-api';

class BlogList extends Component {

    componentDidMount(){
        postApi.getApiPosts();
    }


    render() {
        //var len = this.props.posts.blogs.length;
        //console.log(this.props);
        //if(len > 0) {
            return (
                <div className="row">
                    <div>Blogs</div>
                    <div className="row">
                        <div>
                            {
                                // this.props.posts.blogs[len - 1].posts.map((item, key) => {
                                //     return <BlogElem
                                //         title={item.name}
                                //         text={item.text}
                                //         id={item._id}
                                //     />
                                // })
                            }
                        </div>
                    </div>
                </div>
            );
        // } else {
        //     return <div></div>;
        // }
    }
}

export default connect(
    (state, ownProps) => (() => {
        console.log(state);
        return {
            posts: state.posts
        }
    }))
(BlogList);