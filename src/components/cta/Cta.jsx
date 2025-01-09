import React from 'react'
import PropTypes from 'prop-types';
import './Cta.scss';

function Cta({ type, label, onClick }) {
    const dynamicType = `type:${type}`;
    return (
        <button
            type='button'
            className={['storybook-button', `storybook-button--${type}`].join(' ')}
        >
            {label}
        </button>
    )
}

Cta.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['signIn', 'get', 'delAccount']),
    onClick: PropTypes.func,

}

Cta.defaultProps = {
    label: 'Sign in',
    type: 'signIn',
    onClick: () => { },
};

export default Cta