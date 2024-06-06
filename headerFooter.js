class SpecialHeader extends HTMLElement {
    connectedCallback() {
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

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `        <div class="footer-container">
            <div class="follow-me">
                <p>retrouvez moi sur</p>
            </div>
            <div class="socials">
                <a href="https://x.com/janisgaucho"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.linkedin.com/in/janisbotella/"><i class="fa-brands fa-linkedin-in"></i></a>                
                <a href="https://www.reddit.com/user/janisgaucho/"><i class="fa-brands fa-reddit-alien"></i></a>            
            </div>

            <div class="github">
                <a href="https://github.com/janisgaucho">
                    <p>@janisgaucho</p>
                    <i class="fa-brands fa-github"></i></i>
                </a>
            </div>
        </div>
`
    }
}      

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)