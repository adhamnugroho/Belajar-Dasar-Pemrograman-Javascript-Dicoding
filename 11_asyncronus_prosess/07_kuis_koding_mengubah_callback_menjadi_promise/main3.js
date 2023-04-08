/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

// Import library
const { promisify } = require("util");

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === "id") {
      callback(null, [
        { id: "id-jk", name: "Jakarta" },
        { id: "id-bt", name: "Banten" },
        { id: "id-jr", name: "Jawa Barat" },
      ]);
      return;
    }

    callback(new Error("Country not found"), null);
  }, 1000);
}

// convert promise dengan promisify
const getDataProvince = promisify(getProvinces);

getDataProvince("id")
  .then((countryHasil) => {
    console.log(countryHasil);
  })
  .catch((error) => {
    console.log("\n" + error.message);
  });

module.exports = { getProvinces: getProvinces, getDataProvince: getDataProvince };
