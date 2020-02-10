import React, { Component } from 'react'
import { Consumer } from '../../context'
import uuid from 'uuid'


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
                                        <div className="form-group">
                                            <label htmlFor="name">name : </label>
                                            <input type="text" name="name" className="form-control form-control-lg" value={name}
                                                onChange={this.onchange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">email : </label>
                                            <input type="email" name="email" className="form-control form-control-lg" value={email}
                                                onChange={this.onchange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">phone : </label>
                                            <input type="text" name="phone" className="form-control form-control-lg" value={phone}
                                                onChange={this.onchange} />
                                        </div>
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