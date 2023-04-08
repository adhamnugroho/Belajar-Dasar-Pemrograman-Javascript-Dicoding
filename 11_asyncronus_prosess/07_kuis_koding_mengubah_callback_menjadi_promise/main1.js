/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === "id") {
      const country = [
        { id: "id-jk", name: "Jakarta" },
        { id: "id-bt", name: "Banten" },
        { id: "id-jr", name: "Jawa Barat" },
      ];


      callback(null, country);
      return;
    }

    callback(new Error("Country not found"), null);
  }, 1000);
}

function getCountry(error, country) {
  if (error) {
    console.log("Error: " + error.message);
    return;
  } 

  console.log("Proses berhasil: " + JSON.stringify(country));
}

getProvinces("id", getCountry);

module.exports = { getProvinces: getProvinces };
