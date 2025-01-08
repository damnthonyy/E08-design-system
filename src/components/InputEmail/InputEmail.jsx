import React from 'react'
import './InputEmail.scss'
import PropTypes from 'prop-types'
function InputEmail({ variant, label, onClick }) {
    return (
        <>
            <div className='input-email-wrapper'>
                <label htmlFor='input'> Email* </label>
                <input
                    className={`input-email ${variant}`}
                    type='email'
                    onClick={onClick}
                    placeholder={label}
                    disabled={variant === 'disabled'}
                >
                </input>
            </div>
        </>
    )
}
InputEmail.propTypes = {
    variant: PropTypes.oneOf(['disabled', 'active', 'error']),
    label: PropTypes.string,
    onClick: PropTypes.func,
};




export default InputEmail