import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncGetMenus } from "../actions/menu";
import { Link } from 'react-router';


class Menu extends Component {
    componentDidMount(){
        //this.props.getMenu();
    }

     render() {
        return (
            <nav>
                <div className="container">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li key="1"><Link to="/">Home</Link></li>
                            <li key="2"><Link to="/blog" activeClassName="active">Blog</Link></li>
                            <li key="3"><Link to="/contact" activeClassName="active">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(
    state => ({
       menu: state
    }),
    dispatch => ({
        getMenu: () => {
            dispatch(asyncGetMenus());
        }
    }))(Menu);
