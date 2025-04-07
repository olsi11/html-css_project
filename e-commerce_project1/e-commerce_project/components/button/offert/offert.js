class offertComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        this.innerHTML = `
        <link rel="stylesheet" href="offert.css">
        <div class="offers-container">
        <div class="delivery">
            <img src="file:///C:/Users/SINDROMA/Downloads/e-commerce_project/e-commerce_project/assets/images/truck-sign.svg" alt="" srcset="">
              
            <h3 style="font-size: medium;">FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over 140$</p>
        </div>
        <div class="costumerService">
            <img src="file:///C:/Users/SINDROMA/Downloads/e-commerce_project/e-commerce_project/assets/images/headphones.svg" alt="">
            <h3 style="font-size: medium;">24/7 CUSTUMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
        </div>
        <div class="money-back-guarantee">
            <img src="file:///C:/Users/SINDROMA/Downloads/e-commerce_project/e-commerce_project/assets/images/tick-sign.svg" alt="">
            <h3 style="font-size: medium;">MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
        </div>
    </div>
        `
    }
}

customElements.define('offert-component', offertComponent)