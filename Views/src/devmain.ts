import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './index'
import { Task } from 'models'

@customElement('my-dev-main')
export class DevMain extends LitElement {
    tasks: Task[]

    constructor()
    {
        super()
        this.tasks = [
            new Task("id", "summary", "des"),
            new Task("id", "summary", "des"),
            new Task("id", "summary", "des"),
        ];
    }

    render() {
        return html`
            <my-task-list listName="Test" .taskList=${this.tasks}></my-task-list>
            <div>
                ${this.tasks.map(item => html`<my-task-card .task=${item}></my-task-card>`)}
            </div>
            <my-task-card .task=${new Task("id 2", "summary", "des")}>
            Test
            </my-task-card>
            <my-element></my-element>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-dev-main': DevMain
    }
}