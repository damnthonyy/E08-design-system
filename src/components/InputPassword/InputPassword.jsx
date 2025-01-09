import React from 'react'
import './InputPassword.scss'
import { useState } from 'react';
import PropTypes from 'prop-types';

function InputPassword({ variant, label, onClick, onChange, value }) {

    //use state for interaction with eyes (open/close) icon
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    //variable pour les icones
    const eyeOpenicon = "👀";
    const eyeCloseIcon = "🙈";

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const dynamicLabel = label || `variant: ${variant}`;
    return (
        <>
            <div className='input-password-wrapper'>
                <label htmlFor='input' className='input-label'> Password* </label>
                <div className='style-input-eyesIcon'>
                    <input
                        className={['input-password', `input-password--${variant}`].join(' ')}
                        type={isPasswordVisible ? 'text' : 'password'}
                        onClick={onClick}
                        placeholder={dynamicLabel}
                    >
                    </input>

                    <button
                        className='eye-icon'
                        type='password-toggle-icon'
                        onClick={togglePasswordVisibility}
                        aria-label={isPasswordVisible ? "hide password" : "show password"}
                    >
                        {isPasswordVisible ? "👀" : "🙈"}
                    </button>

                </div>





            </div>
        </>
    )
}

InputPassword.prototypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(['disabled', 'active', 'error']),
    onChange: PropTypes.func,
    value: PropTypes.string,

}

InputPassword.defaultProps = {
    label: 'password',
    placeholder: 'write your password',
    variant: 'disabled',
    onChange: () => { },
    value: '',
};
export default InputPassword