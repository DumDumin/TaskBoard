import { Task } from "./task";

export interface IService
{
    HelloText: string

    GetTask(id: string): Task
}

export class Service implements IService
{
    HelloText: string = 'Hello Service';

    GetTask(id: string): Task {
      return new Task("id", "summary", "description");
    }
}