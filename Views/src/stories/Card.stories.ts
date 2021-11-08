import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components';
import { Card } from '../my-card';

// import {Button} from '@material/mwc-button'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'my-card',
  //👇 Our exports that end in "Data" are not stories.
  title: 'Example/Card',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
} as Meta;


// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template : Story<Card> =({taskId}) => 
  html`<my-card taskId="${taskId}"></my-card>`;


export const Primary: Story<Card> = Template.bind({});
Primary.args = {
  taskId: 'Button',
};

