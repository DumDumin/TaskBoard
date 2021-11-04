import { containerInjection} from 'dependencyinjection/wrapper'
import { IService } from 'models/src/service';

class TestService implements IService {
    HelloText: string;
}

containerInjection.addSingleton<IService>(TestService, "Service")
