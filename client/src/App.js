import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncGetMenus } from './actions/menus';


class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={this.props.getMenus}>GetMenu</button>
      </div>
    );
  }
}

export default connect(
    state => ({
        menus: state.menus
    }),
    dispatch => ({
        getMenus: () => {
            dispatch(asyncGetMenus())
        }
    })
)(App);
