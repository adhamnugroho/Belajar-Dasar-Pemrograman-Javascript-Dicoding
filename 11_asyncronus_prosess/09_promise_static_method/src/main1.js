const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 3000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 2000));

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 10000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 2000));

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.all([promise1, promise3, promise2]).then((values) => console.log(values)); // [1, 2, 3] setelah 10 detik
