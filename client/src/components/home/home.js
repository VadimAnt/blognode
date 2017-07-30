import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogList from "../blog/BlogList";

class Home extends Component {
    render() {
        return (
            <div>Home</div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    }))
(Home);