import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from 'models';

@customElement('my-task-card')
export class TaskCard extends LitElement {

  static styles = css`
    .host {
      color: blueviolet;
      display: block;
      border: solid 1px gray;
      padding: 160px;
      max-width: 800px;
    }
    .card {
      background: #ffffff;
      border-radius: 2px;
      border: solid 1px gray;
      display: inline-block;
      height: 300px;
      margin: 1rem;
      position: relative;
      width: 300px;
    }

    .card-1 {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      padding: 16px;
    }

    .card-1:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  `;

  @property({attribute: false})
  task!: Task;

  constructor()
  {
      super()
      console.log("mytask")
  }

  render() {
    console.log(this.task);
    return html`
        <div class="card card-1">
          <h1>${this.task.Id}</h1>
          <h2>${this.task.Summary}</h2>
          <h2>${this.task.Description}</h2>
          <h3>Status: ${this.task.Status}</h3>
        </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-task-card': TaskCard
  }
}
