import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
const Header = (props) => {
    return (
        // <div>
        //   <h1 style={cssStyles}>{props.branding}</h1> 
        // </div>

        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <Link to="/" className="navbar-brand">{props.branding}</Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><i className="fas fa-home"> </i>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"> </i>Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link"> <i className="fas fa-question"></i>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

Header.defaultProps = {
    branding: "MY app"
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

//const cssStyles = null; //{color:'red'}

export default Header;