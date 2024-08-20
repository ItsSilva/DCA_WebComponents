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
        <product-card img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Soft-CP-OneDriveCampaignRefresh-2?wid=380&hei=213&fit=crop" 
        alt="OneDrive"
        title="Microsoft OneDrive" 
        description="Description of the OneDrive" 
        button="More Information">
        </product-card>`;
    }
};
customElements.define('app-container', AppContainer);