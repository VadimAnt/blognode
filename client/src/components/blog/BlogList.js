import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogElem from './BlogElem';
import { asyncGetBlogs } from '../../actions/blogs';

class BlogList extends Component {

    componentDidMount(){
        this.props.getBlogs();
    }


    render() {
        var len = this.props.posts.blogs.length;
        if(len > 0) {
            return (
                <div className="row">
                    <div>Blogs</div>
                    <div className="row">
                        <div>
                            {
                                this.props.posts.blogs[len - 1].posts.map((item, key) => {
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
        } else {
            return <div></div>;
        }
    }
}

export default connect(
    state => ({
        posts: state
    }),
    dispatch => ({
        getBlogs: () => {
            dispatch(asyncGetBlogs());
        }
    }))
(BlogList);