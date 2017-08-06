import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../forms/ContactForm';

class Contact extends Component {
    render() {
        return (
            <ContactForm />
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    }))(Contact);