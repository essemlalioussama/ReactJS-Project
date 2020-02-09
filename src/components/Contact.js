import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import "./contact.css"


class Contact extends Component {

    state = {}
    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired,
    //     number: PropTypes.string.isRequired
    // }
    onshowme = (name, e) => {
        console.log(name, e.target);

    }

    render() {
        const { name, email, phone } = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h1>{name}<li onClick={this.onshowme.bind(this, name)
                } className="fas ml-1 fa-sort-down"></li></h1>
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>
            </div >
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;