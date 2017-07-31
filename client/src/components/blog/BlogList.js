import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogElem from './BlogElem';
import { asyncGetBlogs } from '../../actions/blogs';

class BlogList extends Component {

    componentDidMount(){
        this.props.getBlogs();
    }


    render() {
        console.log( this.props);
        return (
            <div className="row">
                <div>Blogs</div>
                <div className="row">
                    <div>
                        {
                            // this.props.data.blogs.posts.map((item, key) => {
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