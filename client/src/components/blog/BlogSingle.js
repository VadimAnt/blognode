import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncGetSingleBlog } from '../../actions/blogs';

class BlogSingle extends Component {

    componentDidMount(){
        this.props.getSingleBlog(this.props.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="row">
                        <h3>{this.props.post.name}</h3>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12">
                    <div className="row">
                        <p>{this.props.post.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        getSingleBlog: (id) => {
            dispatch(asyncGetSingleBlog(id));
        }
    }))
(BlogSingle);