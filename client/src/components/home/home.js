import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row text-center">
                    <h1>Home</h1>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    }))(Home);