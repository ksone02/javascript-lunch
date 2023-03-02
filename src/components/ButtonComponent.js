import CustomElement from "../abstracts/CustomElement";

class ButtonComponent extends CustomElement {
  template() {
    return `
    <button type="button" class="button ${this.getAttribute(
      "type"
    )} text-caption">${this.getAttribute("text")}</button>
    `;
  }
}

customElements.define("button-element", ButtonComponent);

export default ButtonComponent;
