export function showProductModal(){

    const product = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: {
        rate: 3.9,
        count: 120
    }
    } 
            
        const productModal = document.createElement("dialog")
        productModal.id = "product-modal"
        productModal.style = `
            background: solid #00000080;        
        `
        
        const productImage = document.createElement("img")
        productImage.id = "product-image"
        productImage.alt = product.title
        productImage.src = product.image

        const productDetails = document.createElement("ul")
        productDetails.id = "product-details"
        const {image, ...textDetails} = product
        for(let element in textDetails) {
            const li = document.createElement("li")
            li.textContent = element
            productDetails.appendChild(li)
        };

        productModal.append(productImage, productDetails)
        document.body.appendChild(productModal)
        productModal.showModal()
}