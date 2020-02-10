import React, { Component } from 'react';
const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'Delete_Contact': return {
            ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
        case 'add_Contact': return {
            ...state, contacts:
                [action.payload,
                ...state.contacts]
        };

        default: return state;
    }
}

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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
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