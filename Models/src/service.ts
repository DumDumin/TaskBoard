export interface IService
{
    HelloText: string
}

export class Service implements IService
{
    HelloText: string = 'Hello Service';
}