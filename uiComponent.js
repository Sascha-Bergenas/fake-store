export function showProductModal(product){
           
    const productModal = document.querySelector("#product-modal")
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

    productModal.replaceChildren(productImage, productDetails)
    productModal.attributes
    productModal.showModal()
}
export function productCard(product) {
  const container = document.getElementById("product-list");

  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <h2>${product.title}</h2>
    <p>$${product.price}</p>
    <p>${product.description}</p>
    <img src="${product.image}" />
  `;

  return card;
}

export function productSearch(event, searchField) {
  if (
    event.type === "click" ||
    (event.type === "keydown" && event.key === "Enter")
  ) {
    event.preventDefault();
    const product1 = searchField.value;
    console.log("search:", product1);
  }
}

export function renderSearched(searched) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (searched.length === 0) {
    const card = document.createElement("div");
    card.textContent = "Finns ingen sån";
    card.style.color = "red";

    container.append(card);
  }

  searched.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <p>${product.description}</p>
            <img src="${product.image}" />
          `;
    container.append(card);
  });
}

export function renderSort(productArr) {
  console.log(productArr);
  const sorted = productArr.sort((a, b) => a.price - b.price);
  console.log(sorted);
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  sorted.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <p>${product.description}</p>
            <img src="${product.image}" />
          `;
    container.append(card);
  });
}
