import { getData } from "./apiService.js";
import { productCard } from "./uiComponent.js";

const searchField = document.querySelector("input");
const searchButton = document.querySelector("button");

async function init() {
  const products = await getData();
  console.log("works");

  const container = document.getElementById("product-list");
  products.forEach((product) => {
    const card = productCard(product);
    container.appendChild(card);
  });
}

init();
