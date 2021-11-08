import { container } from 'dependencyinjection/wrapper'
import { IService, Service } from 'models';

container.bind<IService>("Service").to(Service);

// can be used to import all custom elements at once
// import '../src/index';

// use custom elements to define controls and actions
import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';
setCustomElementsManifest(customElementsManifest);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}