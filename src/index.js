/**分割代入 */
// const val = {
//   name: "KR",
//   age: 30
// };

// const message = `名前は${val.name},年齢は${val.age}歳です`;

// const { name, age } = val;
// const message1 = `名前は${name},年齢は${age}歳です`;

// console.log(message1);

// const arr = ['KR', 30];

// const msg3 = `名前${arr[0]},年齢${arr[1]}`;

// const [name, age] = arr;
// const msg4 = `名前${name},年齢${age}`;
// console.log(msg4);

/**デフォルト値、引数 */
// const sayHello = (name = 'ゲスト') => {
//   console.log(`こんにちは${name}さん`);
// }
// sayHello('むう');

/**スプレッド構文 */
// const arr = [1,2,3,4];
// // console.log(...arr);

// const sumFunc = (num, num1, num2, num3) => {
//   console.log(num + num1 + num2 + num3)
// };

// sumFunc(...arr);

// const arr2 = {
//   name: "KR",
//   age: 30
// };
// const [a, b, ...ar] = arr2;
// console.log(ar);

// const arr3 = {
//   address: "XXXX",
//   profession: "ITエンジニア"
// };
// const arr4 = {
//   ...arr2,
//   ...arr3
// };
// console.log(arr4);

const arr = ["RK", "田中", "山岡"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

const new_arr = arr.map((val, index) => {
  if (index == 0) {
    return val;
  } else {
    return `${val}さん`;
  }
});
console.log(new_arr);

// const number_arr = [
//   1,2,3,4,5
// ];

// const new_ar = number_arr.filter(val => {
//   return val % 2 !== 0;
// });

// console.log(new_ar);
