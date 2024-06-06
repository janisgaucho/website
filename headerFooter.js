class SpecialHeader extends HTMLElement {
    ConnectedCallback() {
        this.innerHTML = `        <div class="menu-container">
            <div class="logo">
                <p>janis_botella</p>
            </div>
            <div class="menu-links">
                <p><a href="index.html" class="menu-link">_accueil</a></p>
                <p><a href="portfolio.html" class="menu-link">_portfolio</a></p>
                <p><a href="services.html" class="menu-link">_services</a></p>
            </div>
            <div class="menu-contact">
                <a href="contact.html" class="menu-link">_contactez moi</a>
            </div>
         </div>`
    }
}

customElements.define('special-header', SpecialHeader);