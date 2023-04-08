// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
  .then((value) => console.log(value)) // 1
  .catch((error) => console.log(error.message));

// rejected 2 sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 10000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("2")), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

// rejected 2 sample
const promiseRejectAll1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("1")), 1000));
const promiseRejectAll2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("2")), 2000));
const promiseRejectAll3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseRejectAll1, promiseRejectAll2, promiseRejectAll3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // All Promises were rejected
