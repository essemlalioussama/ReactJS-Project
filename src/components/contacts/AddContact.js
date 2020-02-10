import React, { Component } from 'react'
import { Consumer } from '../../context'
import uuid from 'uuid'
import TextInput from '../layout/textInput'


class Addcontact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }


    onchange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = {
            id: uuid(), name, email, phone
        }
        console.log(newContact.id);
        dispatch({ type: 'add_Contact', payload: newContact });
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="card mb-3">
                                <div className="card-header">Add Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <TextInput name={"name"} placeholder={"Entrer name..."} value={name} onchange={this.onchange} label="Name" />

                                        <TextInput name={"email"} placeholder={"Entrer email..."} value={email} onchange={this.onchange} label="Email" />

                                        <TextInput name={"phone"} placeholder={"Entrer phone..."} value={phone} onchange={this.onchange} label="Phone" />

                                        <input type="submit" value="Ajouter" className="btn btn-block bg-light" />
                                    </form>
                                </div>
                            </div>

                        )
                    }
                }
            </Consumer>
        )
    }
}

export default Addcontact;