import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncGetMenus } from './actions/menus';


class App extends Component {
  render() {
      console.log(this.props.ownProps);
    return (
      <div className="App">
          <button onClick={this.props.getMenus}>GetMenu</button>
      </div>
    );
  }
}

export default connect(
    (state, ownProps) => ({
        menus: state,
        ownProps: ownProps
    }),
    dispatch => ({
        getMenus: () => {
            dispatch(asyncGetMenus())
        }
    })
)(App);
