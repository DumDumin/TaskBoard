import { Task } from "./task";
import {injectable} from 'dependencyinjection/wrapper';

export interface IService
{
    HelloText: string

    GetTask(id: string): Task
}

@injectable()
export class Service implements IService
{
    HelloText: string = 'Hello Service';

    rnd;
    constructor(){
      this.rnd = Math.random();
    }

    GetTask(id: string): Task {
      return new Task(id, "summary " + this.rnd, "description");
    }
}