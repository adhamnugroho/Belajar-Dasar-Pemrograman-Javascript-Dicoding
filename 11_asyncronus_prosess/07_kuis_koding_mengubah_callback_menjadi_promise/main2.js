/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === "id") {
        resolve([
          { id: "id-jk", name: "Jakarta" },
          { id: "id-bt", name: "Banten" },
          { id: "id-jr", name: "Jawa Barat" },
        ]);
        return;
      }

      reject(new Error("Country not found"));
    }, 1000);
  });
}

getProvinces("id").then((countryHasil) => {
    console.log(countryHasil);
}).catch((error) => {
    console.log("\n" + error.message);
});

module.exports = { getProvinces: getProvinces };
