import React, { Component } from 'react'


class Addcontact extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const Contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value

        }
        console.log(Contact);

    }

    static defaultProps = {
        name: "Essemlali Oussama",
        email: "o.essemlali@gmail.com",
        phone: "0617097894"

    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">name : </label>
                            <input type="text" name="name" className="form-control form-control-lg" defaultValue={name} ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">email : </label>
                            <input type="email" name="email" className="form-control form-control-lg" defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">phone : </label>
                            <input type="text" name="phone" className="form-control form-control-lg" defaultValue={phone} ref={this.phoneInput}
                            />
                        </div>
                        <input type="submit" value="Ajouter" className="btn btn-block bg-light" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Addcontact;