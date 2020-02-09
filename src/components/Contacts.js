import React, { Component } from 'react';
import Contact from './Contact'


export default class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "Essemlali Oussama",
                    email: "o.essemlali@gmail.com",
                    phone: "0617097894"
                },
                {
                    id: 2,
                    name: "Asmae Kaouissi",
                    email: "kaouissi.univers@gmail.com",
                    phone: "0632749082"
                },
                {
                    id: 3,
                    name: "Amani benyamna",
                    email: "amani-jad@gmail.com",
                    phone: "0622097852"
                }
            ]
        };
    };

    render() {
        const { contacts } = this.state;
        return (
            < div >
                {
                    contacts.map(contact =>
                        <Contact
                            key={contact.id}
                            contact={contact}
                        />
                    )
                }

            </div >
        )
    }
}

