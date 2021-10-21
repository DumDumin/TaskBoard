import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-card')
export class Card extends LitElement {

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
    }

    .card-1:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  `;

  @property()
  name = 'World222';

  @property({ type: Number })
  count = 0;

  render() {
    return html`
        <div class="card card-1">
          <h1>${this.sayHello(this.name)}!</h1>
          <button @click=${this._onClick} part="button">
            Click Count: ${this.count}
          </button>
          <slot></slot>
        </div>
        `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-card': Card
  }
}
