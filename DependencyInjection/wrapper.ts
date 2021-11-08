// reflect metadata should be the first import - before everything that is injected
import 'reflect-metadata'
import { Container } from 'inversify';
import getDecorators from "inversify-inject-decorators";

// create container, which will be used by inject decorators
let container = new Container();
let { lazyInject } = getDecorators(container, false);


export function lazyInjectWrapper (serviceName: string){
    return (target: any, key: string) => {
        lazyInject(serviceName)(target, key)
        // override getter with the value it would need to request at every access
        target[serviceName] = target[serviceName]; 
    }
}

export function generateIdName(constructorName: string) {
    const name = constructorName;
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export { container };
export { injectable } from 'inversify';