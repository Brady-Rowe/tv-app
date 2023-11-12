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
        max-height: 200px;
        width: 150px;
        padding: 8px;
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 10px;
        background-color: white;
        border-radius: 6px;
        box-shadow: 1px 1px 1px 2px grey;
        text-align: left;
      }

    `;
  }
  // LitElement rendering template of your element
  render() {
    return html`
    <div class="course-topic">
        <h3>${this.title}</h3>
        <!-- <h4>${this.presenter}</h4> -->
        <slot></slot>
    </div>
      `;
  }
}
// tell the browser about our tag and class it should run when it sees it
customElements.define(TvChannel.tag, TvChannel);
