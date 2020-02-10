import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {
    state = {
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
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer