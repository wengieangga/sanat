const cards = [
  {
    heading: "Automotive and mobility",
    paragraph:
      "Cras erosed nisl, imperdiet in nisl rhoncus, lobortis tempus ligula. Duis elementum laoreet congue. In scelerisque metused interdum eros dignissim nisl laoreet.",
  },
  {
    heading: "Structural Steel Supplies",
    paragraph:
      "Cras erosed nisl, imperdiet in nisl rhoncus, lobortis tempus ligula. Duis elementum laoreet congue. In scelerisque metused interdum eros dignissim nisl laoreet.",
  },
  {
    heading: "The raw materials mining",
    paragraph:
      "Cras erosed nisl, imperdiet in nisl rhoncus, lobortis tempus ligula. Duis elementum laoreet congue. In scelerisque metused interdum eros dignissim nisl laoreet.",
  },
];

class Card extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<div class="">
    
   asdasdas
  </div>`;
  }
}

customElements.define("main-card", Card);
