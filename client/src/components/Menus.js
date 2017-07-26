import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menus extends Component {
    render() {
        console.log(this.props.menus);
        return (
            <nav className="App">
                <div className="container">
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        {
                            this.props.menus.map((item) => {
                                return <li>{item}</li>
                            })
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(
    state => ({
        menus: state.menus
    }),
    dispatch => ({

    })
)(App);
