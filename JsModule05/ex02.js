const numbers = [1,2,3,4];

const doubledNumbers = numbers.map(n => n*2);
// array.map(function callback(currentValue[, index[, array]]) {
//     // 処理
//   }[, thisArg]);
//何もしなくても自動で配列側からmapに情報を渡す。配列の全ての要素にわたした関数の処理を行う
console.log("resule",doubledNumbers);