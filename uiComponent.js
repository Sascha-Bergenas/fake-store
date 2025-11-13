export async function handleSearch() {
  const input = document.querySelector("#productList").value.trim();

  return getData(input);
}
