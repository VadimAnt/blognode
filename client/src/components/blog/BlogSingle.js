import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiPost } from '../../actions/blogs';

class BlogSingle extends Component {

    componentDidMount(){
        this.props.getSingleBlog(this.props.params.id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="row">
                        <h3>{this.props.posts.post.name}</h3>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12">
                    <div className="row">
                        <p>{this.props.posts.post.text}</p>
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
        getSingleBlog: (id) => {
            dispatch(getApiPost(id));
        }
    }))
(BlogSingle);