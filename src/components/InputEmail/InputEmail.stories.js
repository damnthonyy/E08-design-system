import React from "react";
import InputEmail from "./InputEmail";

export default {
    title: 'components/InputEmail',
    component: InputEmail,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'select', options: ['disabled', 'active', 'error'] },
            description: 'Defines the variant style of the input'
        },
        label: {
            control: 'text',
            description: 'Defines the variant style of the input',
        },
        onClick: { action: 'clicked', description: 'Click event handler' },
    }

}

export const Disabled = {
    variant: 'disabled',
    label: '',
};

export const Active = {
    variant: 'active',
    label: '',
};

export const Error = {
    variant: 'error',
    label: 'please write a correct password',
};