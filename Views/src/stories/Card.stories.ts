import { Card } from '../my-card';
import { Service } from 'models';
import { Meta, Story } from '@storybook/web-components';

// import {Button} from '@material/mwc-button'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'my-card',
  //👇 Our exports that end in "Data" are not stories.
  title: 'Example/Card',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onclick: { action: 'test'},
    onArchiveTask: {},
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
// import { html } from 'lit';
// const Template : Story<Card> =({taskId}) => 
//   html`<my-card taskId="${taskId}"></my-card>`;

let card = new Card();
card.service = new Service();
const Template = (args: any) => Object.assign(card, args);

export const Primary: Story<Card> = Template.bind({});
Primary.args = {
  taskId: 'Button',
  count: 10,
};

