enum TaskStatus {
    ToDo = 0,
    InProgress = 1,
    Done = 2
}

export class Task {
    private _id: string;
    private _summary: string;
    private _description: string;
    private _status: TaskStatus;

    constructor(id: string, summary: string, description: string) {
        this._id = id;
        this._summary = summary;
        this._description = description;
        this._status = TaskStatus.ToDo;
    }

    public get Id() { return this._id; }
    public get Description() { return this._description; }
    public get Summary() { return this._summary; }
    public get Status() { return this._status; }
}