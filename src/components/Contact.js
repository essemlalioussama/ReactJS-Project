import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import "./contact.css"


class Contact extends Component {

    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired,
    //     number: PropTypes.string.isRequired
    // }

    render() {
        const { name, email, number } = this.props;
        return (
            <div className="card card-body mb-3">
                <h1>{name}</h1>
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>

                    <li className="list-group-item">{number}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default Contact;