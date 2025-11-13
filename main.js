import {showProductModal as showProduct } from "./uiComponent.js"

import { getData } from "./apiService.js";
import { productCard, renderSearched } from "./uiComponent.js";

const searchField = document.querySelector("input");
const searchButton = document.querySelector("button");

async function init() {
  const products = await getData();
  console.log("works");

  const container = document.getElementById("product-list");
  products.forEach((product) => {
    const card = productCard(product);
    container.appendChild(card);
    card.addEventListener("click", () => {
        showProduct(product)})
  });
}

init();



searchButton.addEventListener("click", async () => {
  const products = await getData();
  const input = document.querySelector("#search-product").value.trim();

  const searched = products.filter((product) => {
    return product.title.toLowerCase().includes(input.toLowerCase());
  });
  renderSearched(searched);
});
