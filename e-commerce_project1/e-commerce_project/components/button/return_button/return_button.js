class returnButtonComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        this.innerHTML = `
        <link rel="stylesheet" href="return_buton.css">
            <button class="container">
        <b class="textContainer">
            Return To Shop
        </b>
    </button>
        `
    }
}

customElements.define('return-button', returnButtonComponent)