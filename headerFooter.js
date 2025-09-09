// HEADER
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `        <div class="menu-container">
            <div class="logo">
                <p>janis_botella</p>
            </div>
            <div class="menu-links">
                <a href="index.html" class="menu-link active">_accueil</a>
                <a href="portfolio.html" class="menu-link">_portfolio</a>
            </div>
            <div class="menu-contact">
                <a href="contact.html" class="menu-link">_contactez moi</a>
            </div>
         </div>`
    }
}
customElements.define('special-header', SpecialHeader)

const liens = document.querySelectorAll('.menu-link');
const urlActuelle = window.location.pathname;

for (const lien of liens) {
  lien.classList.remove('active');
  if (lien.href.includes(urlActuelle) && !lien.href.includes("contact")) {
    lien.classList.add('active');
  }
}

// FOOTER
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `        <div class="footer-container">
            <div class="follow-me">
                <p>retrouvez moi sur</p>
            </div>
            <div class="socials">
                <a href="https://www.instagram.com/janisbotella/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/janisbotella/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>                
            </div>

            <div class="github">
                <a href="https://github.com/janisgaucho" target="_blank">
                    <p>@janisgaucho</p>
                    <i class="fa-brands fa-github"></i></i>
                </a>
            </div>
        </div>
`
    }
}      
customElements.define('special-footer', SpecialFooter)