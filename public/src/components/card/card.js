class Card extends HTMLElement {

    static get observedAttributes() {
        return ['img', 'alt', 'title', 'description', 'button'];
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[propName] = newValue;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <img src="${this.img}" alt="${this.alt}">
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        <button>${this.button}</button
        `;
    }
}

customElements.define('product-card', Card);
export default Card;