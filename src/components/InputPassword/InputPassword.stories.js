import { fn } from '@storybook/test';
import InputPassword from "./InputPassword";

export default {
    title: 'components/InputPassword',
    component: InputPassword,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

        control: { type: 'select', options: ['disabled', 'active', 'error'] },
        description: 'Defines the variant style of the input',
        label: {
            control: 'text',
            description: 'Defines the variant style of the input'
        },
        onclick: { action: 'clicked', description: 'Click event handler' },

    },
    args: { onclick: fn() },

};

export const Disabled = {
    args: {
        variant: 'disabled',
        label: 'Ex: loremIpsum@123',
    }

};

export const Active = {
    args: {
        variant: 'active',
        label: ' ',
    }

};

export const Error = {
    args: {
        variant: 'error',
        label: 'please write the corect password',
    }

};