import { container} from 'dependencyinjection/wrapper'
import { IService, Service } from 'models/src/service';

export {Button} from '@material/mwc-button'

// class TestService implements IService {
//     HelloText: string;
// }

container.bind<IService>("Service").to(Service).inTransientScope();
