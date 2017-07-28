import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Menus extends Component {

    constructor(){
        super();

        this.state = {
            menu: []
        }
    }


    componentDidMount(){
        axios.get('http://localhost:3001/')
            .then(res => {
                this.setState({ menu: res.data.menu });
            });
    }

     render() {
        return (
            <nav>
                <div className="container">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {
                                this.state.menu.map((item, key) => {
                                    return <li key={key}><a href={item.url}>{item.name}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(
    state => ({
       // menus: state.menus
    }),
    dispatch => ({
    }))
(Menus);
