class updateCartButtonComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        this.innerHTML = `
        <link rel="stylesheet" href="updateCart_button.css">
            <button class="container">
        <b class="textContainer">
             Update Cart
        </b>
    </button>
        `
    }
}

customElements.define('cart-button', updateCartButtonComponent)