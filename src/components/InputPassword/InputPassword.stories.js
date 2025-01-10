import { fn } from '@storybook/test';
import InputPassword from "./InputPassword";

export default {
    /**
    * Title and metadata for the Storybook.
    *
    * @property {string} title - The title of the Storybook group.
    * @property {React.Component} component - The React component being documented.
    * @property {Object} parameters - Configuration options for the stories (e.g., layout).
    * @property {Array<string>} tags - Tags for categorizing the component in Storybook.
    * @property {Object} argTypes - Configuration for props and controls in Storybook.
    */
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
        label: ' Lorem ipsum123@',

    }

};

export const Error = {
    args: {
        variant: 'error',
        label: 'please write the corect password',
    }

};