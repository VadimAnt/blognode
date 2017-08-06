import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendApiContact } from '../../actions/contact';

class ContactForm extends Component {

    constructor(){
        super();
        this.sendContactData = this.sendContactData.bind(this);
    }


    sendContactData(e){
        e.preventDefault();
        console.log()
        let form = new FormData();
        form.append('file', this.file.files[0]);
        form.append('email', this.email.value);
        form.append('family', this.family.value);

        //console.log(JSON.stringify(form.data));

        this.props.sendData(form);


    }


    render() {
        return (
            <div>
                <div className="row">
                    <h1>Contact</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={this.sendContactData}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="text" ref={(ref) => this.email = ref} className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" ref={(ref) => this.name = ref} className="form-control" id="exampleInputEmail1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label>Family</label>
                                <input type="text" ref={(ref) => this.family = ref} className="form-control" id="exampleInputEmail1" placeholder="family" />
                            </div>
                            <div className="form-group">
                                <label>Resume</label>
                                <input type="file" name="file" ref={(ref) => this.file = ref} id="exampleInputFile" />
                                    <p className="help-block">You file</p>
                            </div>
                            <button type="submit"  className="btn btn-default">Submit</button>
                        </form>
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
        sendData: (data) => {
            dispatch(sendApiContact(data));
        }
    }))(ContactForm);