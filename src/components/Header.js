import React from 'react';
import PropTypes from 'prop-types'
const Header = (props) => {
    return (
        // <div>
        //   <h1 style={cssStyles}>{props.branding}</h1> 
        // </div>

        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
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