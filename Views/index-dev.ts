import 'reflect-metadata';
import { container } from 'inversify-props';
import { IService } from '../Models/src/service';

class TestService implements IService {
    HelloText: string;
}

container.addSingleton<IService>(TestService, "Service")
