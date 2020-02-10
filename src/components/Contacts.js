import React, { Component } from 'react';
import Contact from './Contact'
import { Consumer } from '../context';

export default class Contacts extends Component {

    deletecontact = (id) => {
        const newcontacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({
            contacts: newcontacts
        });
    }

    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { contacts } = value;
                        return (
                            <React.Fragment>
                                {
                                    contacts.map(contact =>
                                        <Contact
                                            key={contact.id}
                                            contact={contact}
                                            deletecontact={this.deletecontact.bind(this, contact.id)}
                                        />
                                    )
                                }

                            </React.Fragment>
                        )
                    }
                }
            </Consumer>

        )
    }
}

