import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import "./contact.css"


class Contact extends Component {

    state = {
        showcontactinfo: false
    }
    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired,
    //     number: PropTypes.string.isRequired
    // }
    onshowme = () => {
        this.setState({
            showcontactinfo: !this.state.showcontactinfo
        });
    }

    ondeleteclick = () => {
        this.props.deletecontact();
    }

    render() {
        const { name, email, phone } = this.props.contact;
        const { showcontactinfo } = this.state;
        return (
            <div className="card card-body mb-3">
                <h1>{name}<i onClick={this.onshowme.bind(this, name)
                } className="fas ml-1 fa-sort-down" id="toggle" /> <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.ondeleteclick} /></h1>
                {showcontactinfo ? <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul> : null}
            </div >
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deletecontact: PropTypes.func.isRequired
}

export default Contact;