class CategoriesComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        const categories = this.getAttribute('categories')
        this.innerHTML = `
        <link rel="stylesheet" href="index.css">
        <div class="container">
        <div class="color-container">
           <div class="categories-text">
            <p>${categories}</p>
           </div>
        </div>
        <div class="browse-container">
            <h1>
                ${text}
            </h1>
        </div> 
    </div>
    </div>
        `
    }
}

customElements.define('categories-component', CategoriesComponent)