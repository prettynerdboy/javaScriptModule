// array.reduce((accumulator, currentValue) => {
//     return 更新された累積値;
//   }, 初期値);  

const numsA = [10, 20, 30];
const sumA = numsA.reduce((acc, cur) => acc + cur, 0);
console.log("合計:", sumA);

//初期値がないと最初の要素を初期値として扱う↓
//バグるかもしれないから上の使い方の方がいいかも
const numsB = [10, 20, 30];
const sumB = numsB.reduce((acc, cur) => acc + cur);
console.log("合計:", sumB);

// 1人の人に商品を複数発送するとして、送料が固定だとする。
// そうなると送料分を初期値に設定しておくことができる

const prices = [1200, 800, 600];
const shippingFee = 500;

const total = prices.reduce((acc, price) => acc + price, shippingFee);
//この場合、最初のacc=shippingFeeで最初のpriceが1200になる

console.log("合計金額:", total);
