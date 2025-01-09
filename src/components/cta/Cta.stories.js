import { fn } from '@storybook/test';
import Cta from './Cta';

export default {
    title: 'components/Cta',
    component: Cta,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select', options: ['signIn', 'get', 'delAccount'] },
            description: 'Defines the variant style of the input'
        },
        label: {
            control: 'text',
            description: 'Defines the variant style of the button',
        },
        onClick: { action: 'clicked', description: 'Click event handler' },
    },
    args: { onClick: fn() },

}
export const signIn = {
    args: {
        variant: 'signIn',
        label: 'Sign In',
    }

};

export const get = {
    args: {
        variant: 'get',
        label: 'Get a link',
    }

};

export const delAccount = {
    args: {
        variant: 'delAccount',
        label: 'Delete Account',
    }

};