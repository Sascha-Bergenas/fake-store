export async function handleSearch() {
  const input = document.querySelector("#search-product").value.trim();

  return getData(input);
}
