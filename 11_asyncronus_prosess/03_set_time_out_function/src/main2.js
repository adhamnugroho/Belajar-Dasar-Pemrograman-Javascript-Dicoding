let evenNumber = (angka) => {
  if (typeof angka !== "number") {
    return "yang anda masukkan bukan angka";
  }

  const angkaArray = [];

  for (i = 1; i <= angka; i++) {
    if (i % 2 === 0) {
      angkaArray.push(i);
    }
  }

  return angkaArray;
};

let angka1 = setTimeout(() => {
  console.log(evenNumber(10000000));
}, 10000);

