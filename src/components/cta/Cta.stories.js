import { fn } from '@storybook/test';
import Cta from './Cta';

/**
 * @file Cta.stories.js
 * @description Stories for the `Cta` component, showcasing different button types like `signIn`, `get`, and `delAccount`.
 */
export default {

    title: 'components/Cta',
    component: Cta,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        types: {
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
        type: 'signIn',
        label: 'Sign In',
    }

};

export const get = {
    args: {
        type: 'get',
        label: 'Get a link',
    }

};

export const delAccount = {
    args: {
        type: 'delAccount',
        label: 'Delete Account',
    }

};