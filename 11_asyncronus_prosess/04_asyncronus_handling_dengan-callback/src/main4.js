const endpointUrl = "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json";

async function fetchData() {
  try {
    const response = await fetch(endpointUrl);
    const data = await response.json();
    console.log(data);
    // Lakukan operasi lain dengan data yang diperoleh di sini
  } catch (error) {
    console.log(error);
  }
}

fetchData();
