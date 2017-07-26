import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  render() {
      console.log(this.props.menus);
    return (
      <div className="App">
      </div>
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
