import { Task } from 'models';
import { Meta, Story } from '@storybook/web-components';
import { TaskCard } from '../my-task-card';

// import {Button} from '@material/mwc-button'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'my-task-card',
  //👇 Our exports that end in "Data" are not stories.
  title: 'Example/Task',
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

const Template = (args: any) => Object.assign(new TaskCard(), args);

export const Primary: Story<TaskCard> = Template.bind({});
Primary.args = {
  task: new Task("id", "summary", "description")
};

export const Secondary: Story<TaskCard> = Template.bind({});
Secondary.args = {
  task: new Task("id", "summary", "Secondary")
};

