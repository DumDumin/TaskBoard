import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components';
import { MyElement } from '../my-element';
import '../index';
// import { Button } from '@material/mwc-button';
// console.log("preview => register")
// import { containerInjection} from 'dependencyinjection/wrapper'
// import { IService, Service } from 'models';
// containerInjection.addSingleton<IService>(Service, "Service");
// console.log("preview => registered !")

export default {
  component: 'my-element',
  //👇 Our exports that end in "Data" are not stories.
  title: 'Example/Element',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    // onPinTask: {},
    // onArchiveTask: {},
  },
} as Meta;

console.log("test injector");
// let service = containerInjection.get<IService>("Service");
// console.log(service.GetTask("id"));

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template : Story<MyElement> =({}) => 
  html`<my-element></my-element>`;


export const Primary: Story<MyElement> = Template.bind({});
Primary.args = {
};