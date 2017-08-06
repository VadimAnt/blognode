import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

    render() {
        return (
            <div>
                <div className="row text-center">
                    <h1>About us</h1>
                </div>
                <div className="row">
                    <div>
                        Text
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

    }))(About);