import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './index'
import { Task } from 'models'

@customElement('my-dev-main')
export class DevMain extends LitElement {
    constructor()
    {
        super()
        console.log("test")
    }

    render() {
        return html`
            <my-task-card .task=${new Task("id", "summary", "des")}>
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