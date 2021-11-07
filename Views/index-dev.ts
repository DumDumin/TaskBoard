import { containerInjection} from 'dependencyinjection/wrapper'
import { IService, Service } from 'models/src/service';

export {Button} from '@material/mwc-button'

// class TestService implements IService {
//     HelloText: string;
// }

containerInjection.addSingleton<IService>(Service, "Service")
