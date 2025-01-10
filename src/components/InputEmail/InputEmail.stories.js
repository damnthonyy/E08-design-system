import { fn } from '@storybook/test';
import InputEmail from "./InputEmail";

export default {
    /**
  * Metadata for the Storybook configuration.
  *
  * @property {string} title - The title of the Storybook group.
  * @property {React.Component} component - The React component being documented.
  * @property {Object} parameters - Additional configuration for the stories.
  * @property {Array<string>} tags - Tags to categorize the component in Storybook.
  * @property {Object} argTypes - Configuration for the props and controls in Storybook.
  */
    title: 'components/InputEmail',
    component: InputEmail,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
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
    },
    args: { onClick: fn() },

}

export const Disabled = {
    args: {
        variant: 'disabled',
        label: 'johnDoe@gmail.com',
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
        label: 'please write the corect email',
    }

};