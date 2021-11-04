// reflect metadata should be the first import - before everything that is injected
import { customInjection, containerInjection } from 'dependencyinjection/wrapper'

import { createApp } from 'vue'
import App from './App.vue'

import { Service, IService} from 'models/src/service'
import 'views'

export class Service2
{
    @customInjection("Service")
    Test!: IService

    HelloText = "Service2";
}

containerInjection.addSingleton<IService>(Service, "Service");
const t =  new Service2();
console.log(containerInjection.get("Service"));
console.log(t.Test);


const app = createApp(App);
app.config.compilerOptions.isCustomElement = tag => tag === 'my-card'
app.mount('#app');