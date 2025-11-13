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
