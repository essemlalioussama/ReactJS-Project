import React from 'react'
import PropTypes from 'prop-types'


const TextInput = ({ name, label, type, placeholder, value, onchange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label} : </label>
            <input type={type} name={name} className="form-control form-control-lg" value={value}
                onChange={onchange} placeholder={placeholder} required />
        </div>
    )
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired
}
TextInput.defaultProps = {
    type: "text"
}
export default TextInput;