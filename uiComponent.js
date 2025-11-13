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

export function displayProduct() {}

/* export async function handleSearch() {
  const input = document.querySelector("#search-product").value.trim();

  return getData(input);
} */
