export function showProductModal(product){
           
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