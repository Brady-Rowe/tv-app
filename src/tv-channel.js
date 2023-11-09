// import stuff
import { LitElement, html, css } from 'lit';

export class TvChannel extends LitElement {
  // defaults
  constructor() {
    super();
    this.title = '';
    this.presenter = '';
  }
  // convention I enjoy using to define the tag's name
  static get tag() {
    return 'tv-channel';
  }
  // LitElement convention so we update render() when values change
  static get properties() {
    return {
      title: { type: String },
      presenter: { type: String },
    };
  }
  // LitElement convention for applying styles JUST to our element
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      
      .course-topic {
        display: flex;
        flex-direction: column;
        max-height: 50px;
        max-width: 200px;
        padding: 8px;
        margin-bottom: 10px;
        line-height: 2px;
        font-size: 12px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 2px 2px 2px 2px grey;
        text-align: center;

      }

    `;
  }
  // LitElement rendering template of your element
  render() {
    return html`
    <div class="course-topic">
        <h3>${this.title}</h3>
        <h4>${this.presenter}</h4>
        <slot></slot>
    </div>
      `;
  }
}
// tell the browser about our tag and class it should run when it sees it
customElements.define(TvChannel.tag, TvChannel);
