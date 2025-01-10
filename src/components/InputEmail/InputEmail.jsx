import React from 'react'
import './InputEmail.scss'
import PropTypes from 'prop-types'
function InputEmail({ variant, label, onClick }) {
    const dynamicLabel = label || `variant: ${variant}`;
    return (
        <>
            <div className='input-email-wrapper'>
                <label htmlFor='input' className='input-label'> Email* </label>
                <input
                    className={['input-email', `input-email--${variant}`].join(' ')}
                    type='email'
                    onClick={onClick}
                    placeholder={dynamicLabel}
                /* disabled={variant === 'disabled'} */
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

InputEmail.defaultProps = {
    variant: 'disabled',
    label: 'johnDoe@gmail.com',
    onClick: () => { },
}




export default InputEmail