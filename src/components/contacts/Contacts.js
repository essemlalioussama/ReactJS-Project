import React, { Component } from 'react';
import Contact from './Contact'
import { Consumer } from '../../context';

export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { contacts } = value;
                        return (
                            <React.Fragment>
                                <h1 className="display-4 font-weight-bold mb-3 text-danger">Contact List</h1>
                                {
                                    contacts.map(contact =>
                                        <Contact
                                            key={contact.id}
                                            contact={contact}
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

