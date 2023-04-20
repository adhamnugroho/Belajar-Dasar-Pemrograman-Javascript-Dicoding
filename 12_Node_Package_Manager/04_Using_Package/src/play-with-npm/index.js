import _ from 'lodash';

// Menjumlahkan setiap nilai kedalam sebuh array

// const myArray = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];
// }

// console.log(sum);




/* output
10
*/


// sama, menjumlahkan setiap array menggunakan fungsi reduce() 
// const myArray = [1, 2, 3, 4];
// let sum = myArray.reduce((prev, curr) => {
//     return prev + curr;
// });
 
// console.log(sum);
 
/* output
10
*/



// menggunakan fungsi sum dari module loadash
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = _.sum(myArray);
 
console.log(sum);
 
/* output
10
*/