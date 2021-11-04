// reflect metadata should be the first import - before everything that is injected
import 'reflect-metadata'
import { container, inject } from "inversify-props";

export const containerInjection = container;

export function customInjection(target: string){
    console.log("injection")
    return inject(target)
}