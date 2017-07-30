import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './components/menu';


class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <Menu/>
          </header>
          <main className=" container">
              {this.props.children}
          </main>
      </div>
    );
  }
}

export default connect(
    (state, ownProps) => ({
        ownProps: ownProps
    })
)(App);
