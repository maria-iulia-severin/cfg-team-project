class LauraFooter extends HTMLElement {
    connectedCallback() {
    this.innerHTML = 
    
    <footer>
      <p>Get in touch with us today!</p>
      <p><a href="mailto:groupk@CFG.com">groupk@eCFG.com</a></p>
    </footer>
    
    }
}

customElements.define('laura-footer', LauraFooter)