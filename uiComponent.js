export function createProductModal(_product){

const product = {id: 1,
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
        
    const productModal = document.createElement("div")
    productModal.id = "product-modal"
    
    const productImage = document.createElement("img")
    productImage.id = "product-image"
    productImage.alt = product.title

    const productDetails = document.createElement("ul")
    productDetails.id = "product-details"

    productModal.append(productImage, productDetails)
    document.body.appendChild(productModal)
}