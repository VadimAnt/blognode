import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menus from './components/menu';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Menus/>
      </div>
    );
  }
}

export default connect(
    (state, ownProps) => ({
        menus: state,
        ownProps: ownProps
    })
)(App);
