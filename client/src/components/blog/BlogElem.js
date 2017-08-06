import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class BlogElem extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="" alt="" />
                    <div className="caption">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.text}</p>
                        <p>
                            <Link to={"blog/" + this.props.id} className="btn btn-primary" role="button">Button</Link>
                        </p>
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

    }))(BlogElem);