class applyButtonComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        this.innerHTML = `
        <link rel="stylesheet" href="apply_button.css">
        <div class="container"> 
        <div>
           <input type="text" placeholder="Coupon Code" class="inputContainer">
        </div>
        <div>
            <button class="buttonContainer">
                <p class="textContainer">
                    Apply Coupon
                </p>
            </button>
        </div>
    </div>
        `
    }
}

customElements.define('apply-button', applyButtonComponent)