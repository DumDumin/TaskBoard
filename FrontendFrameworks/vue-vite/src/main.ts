import { createApp } from 'vue'
import App from './App.vue'

import { containerInjection } from 'dependencyinjection/wrapper'
import { Service, IService} from 'models'

// make all UI elements available
import 'views'

containerInjection.addSingleton<IService>(Service, "Service");
console.log(containerInjection.get("Service"));

createApp(App).mount('#app')
