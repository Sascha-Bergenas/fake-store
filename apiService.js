export async function getData() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    /*     result.forEach((product) =>
      console.log(
        product.title,
        product.price,
        product.description,
        product.image
      )
    ); */

    return result;
  } catch (error) {
    console.error(error.message);
  }
}

getData();
