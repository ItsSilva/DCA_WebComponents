import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); //Encapsuled the code of the component and send it to the shadow DOM.
    }
    //When the component is connected to the DOM it will execute the connectedCallback method.
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        
        <product-card
        img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/xhpzysipjjhubnagwa40" 
        alt="2 months extra with any Nintendo Switch Online 12-month membership"
        title="2 months extra with any Nintendo Switch Online 12-month membership" 
        description="Existing members can also take advantage of this offer. Ends 08/09." 
        button="Available Now">
        </product-card>
        
        <product-card
        img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/ougjpjl3apxa3irsse7p" 
        alt="The Legend of Zelda: Echoes of Wisdom"
        title="The Legend of Zelda: Echoes of Wisdom" 
        description="Bundle available with Wall Scroll (30cm x 60cm). All game orders include a bonus Zelda Keyring." 
        button="Pre-order Available">
        </product-card>
        
        <product-card
        img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/bgpzuzrnsdgqoxzq1xu2" 
        alt="Nintendo Switch Joy- Con"
        title="The Legend of Zelda: Echoes of Wisdom" 
        description="Customise your Nintendo Switch with new and colourful Joy-Con." 
        button="Discover">
        </product-card>`;
    }
};
customElements.define('app-container', AppContainer);