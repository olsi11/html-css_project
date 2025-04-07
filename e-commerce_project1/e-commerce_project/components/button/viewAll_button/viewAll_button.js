class viewAllButtonComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        this.innerHTML = `
        <link rel="stylesheet" href="viewAll_button.css">
                 <button  class="containerButton">
        <p class="textButtonContainer">
            View All
        </p>
    </button>
        `
    }
}

customElements.define('view.all-button', viewAllButtonComponent)