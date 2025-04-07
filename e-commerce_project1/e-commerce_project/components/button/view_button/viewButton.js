class viewButtonComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        this.innerHTML = `
        <link rel="stylesheet" href="viewButton.css">
                 <button  class="container">
        <p class="textContainer">
            View All Product
        </p>
    </button>
        `
    }
}

customElements.define('view-button', viewButtonComponent)