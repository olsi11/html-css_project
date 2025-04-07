class categoryComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const text = this.getAttribute('text')
        const photo = this.getAttribute('photo')
        const price = this.getAttribute('price')
        const priceDiscount = this.getAttribute('priceDiscount')
        this.innerHTML = `
        <link rel="stylesheet" href="category.css">
        <div class="container">
        <div class="color-container">
           <div class="categories-text">
            <p>Categories</p>
           </div>
        </div>
        <div class="browse-container">
            <h1>
                Browse By Category
            </h1>
          <div class="arrow-container">
            <button class="back-arrow">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                  </svg>
                  
            </button>
            <button class="forward-arrow">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                  </svg>
                  
            </button>
        </div>
    </div>
        <div class="category-container">
            <a href="#" style="color: black; ">
            <div class="phones-container">
               <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"/>
              </svg>
               <p>Phones</p>
            </div>
        </a>
        <a href="#" style="color: black; ">
            <div class="computers-container">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
                  </svg>
                  
               <p>Computers</p>
            </div>
        </a>
        <a href="#" style="color: black;">
            <div class="smartWatch-container">
                <svg id='Smart_Watch_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


                    <g transform="matrix(0.19 0 0 0.19 12 12)" >
                    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-63.45, -64)" d="M 49.400391 12.5 C 45.200391 12.5 41.700391 15.499609 40.900391 19.599609 L 39.099609 29.800781 C 38.899609 30.800781 38.4 31.700781 37.5 32.300781 C 33.8 34.100781 31.300781 37.799219 31.300781 42.199219 L 31.300781 85.800781 C 31.300781 90.100781 33.800391 93.799219 37.400391 95.699219 C 38.300391 96.299219 38.8 97.199219 39 98.199219 L 40.800781 108.40039 C 41.500781 112.50039 45.100781 115.5 49.300781 115.5 L 73.800781 115.5 C 78.000781 115.5 81.500781 112.50039 82.300781 108.40039 L 84.099609 98.199219 C 84.299609 97.199219 84.899219 96.299219 85.699219 95.699219 C 89.299219 93.899219 91.800781 90.200781 91.800781 85.800781 L 91.800781 54.800781 C 92.100781 54.900781 92.299609 54.900391 92.599609 54.900391 C 94.299609 54.900391 95.599609 53.600391 95.599609 51.900391 L 95.599609 44.599609 C 95.599609 42.899609 94.299609 41.599609 92.599609 41.599609 C 92.399609 41.599609 92.100391 41.700781 91.900391 41.800781 C 91.700391 37.600781 89.299219 34.100781 85.699219 32.300781 C 84.899219 31.700781 84.299609 30.800781 84.099609 29.800781 L 82.300781 19.599609 C 81.600781 15.499609 78.000781 12.5 73.800781 12.5 L 49.400391 12.5 z M 49.300781 18.5 L 67.800781 18.5 C 69.000781 18.5 70.100781 19.399219 70.300781 20.699219 L 72.099609 30.900391 C 72.099609 31.000391 72.099219 31.099219 72.199219 31.199219 L 44.900391 31.199219 C 44.900391 31.099219 45 31.000391 45 30.900391 L 46.800781 20.699219 C 47.000781 19.399219 48.100781 18.5 49.300781 18.5 z M 42.400391 37.199219 L 80.900391 37.199219 C 83.700391 37.199219 85.900391 39.499219 85.900391 42.199219 L 85.900391 85.800781 C 85.900391 88.600781 83.600391 90.800781 80.900391 90.800781 L 42.400391 90.800781 C 39.600391 90.800781 37.400391 88.500781 37.400391 85.800781 L 37.400391 42.199219 C 37.400391 39.399219 39.700391 37.199219 42.400391 37.199219 z M 73.099609 44.300781 C 71.199609 44.300781 69.699219 45.900781 69.699219 47.800781 C 69.799219 48.900781 70.3 49.9 71 50.5 L 75.699219 54.300781 L 80.300781 50.599609 C 81.100781 49.999609 81.699219 49.000781 81.699219 47.800781 C 81.699219 45.900781 80.200781 44.300781 78.300781 44.300781 C 77.300781 44.300781 76.399219 44.8 75.699219 45.5 C 75.099219 44.8 74.199609 44.300781 73.099609 44.300781 z M 60.933594 48.722656 C 59.986719 48.788281 59.124609 49.274609 58.599609 50.099609 L 50.5 62.800781 L 44 62.800781 C 42.3 62.800781 41 64.100781 41 65.800781 C 41 67.500781 42.3 68.800781 44 68.800781 L 52.199219 68.800781 C 53.199219 68.800781 54.199219 68.300391 54.699219 67.400391 L 58.699219 61.099609 L 59.800781 80.099609 C 59.900781 81.399609 60.8 82.500781 62 82.800781 C 62.3 82.900781 62.500781 82.900391 62.800781 82.900391 C 63.800781 82.900391 64.800781 82.4 65.300781 81.5 L 73.400391 68.800781 L 79.400391 68.800781 C 81.100391 68.800781 82.400391 67.500781 82.400391 65.800781 C 82.400391 64.100781 80.900781 62.800781 79.300781 62.800781 L 71.699219 62.800781 C 70.699219 62.800781 69.699219 63.299219 69.199219 64.199219 L 65.199219 70.5 L 64.099609 51.5 C 63.999609 50.2 63.100391 49.100781 61.900391 48.800781 C 61.575391 48.725781 61.249219 48.700781 60.933594 48.722656 z M 44.900391 96.800781 L 72.300781 96.800781 C 72.300781 96.900781 72.199219 96.999609 72.199219 97.099609 L 70.400391 107.30078 C 70.200391 108.60078 69.100391 109.5 67.900391 109.5 L 49.400391 109.5 C 48.200391 109.5 47.100391 108.60078 46.900391 107.30078 L 45 97.099609 C 45 96.999609 45.000391 96.900781 44.900391 96.800781 z" stroke-linecap="round" />
                    </g>
                    </svg>
                <p>SmartWatch</p>
            </div>
        </a>
        <a href="#" style="color: black;">
            <div class="camera-container">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"/>
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                  
                <p>Camera</p>
            </div>
        </a>
        <a href="#" style="color: black; ">
            <div class="headphones-container">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"/>
                  </svg>
                  
                <p>Headphones</p>
            </div>
        </a>
        <a href="#" style="color: black; ">
            <div class="gaming-container">
                <svg id='Entertainment_Gaming_Play_Station_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


                    <g transform="matrix(1.43 0 0 1.43 12 12)" >
                    
                    <g transform="matrix(1 0 0 1 2.16 0)" >
                    <path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-9.16, -7)" d="M 6.22507 13.2536 L 6.22507 0.746338 L 9.85002 1.90495 C 12.8891 2.81667 12.8105 7.63888 9.85002 6.82865 L 8.17431 6.28773" stroke-linecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 3.78 4.17)" >
                    <path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-10.78, -11.17)" d="M 8.0618 13.2536 L 12.3103 11.9 C 15.0018 10.9456 12.6128 8.40371 10.2169 9.25136 L 8.0618 10.0386" stroke-linecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -4.54 3.49)" >
                    <path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-2.46, -10.49)" d="M 4.42613 8.46301 L 1.69672 9.69992 C -0.938035 10.7075 1.24434 13.1603 3.75331 12.3486 L 4.42613 12.0748" stroke-linecap="round" />
                    </g>
                    </g>
                    
                    </svg>
                <p>Gaming</p>
            </div>
        </a>
        </div>
    </div>
        `
    }
}

customElements.define('category-component', categoryComponent)