JavaScript Module 05：配列と高階関数（map / filter / reduce）
🎯 目的
配列（Array）の基本的な扱い方を理解する

高階関数（map, filter, reduce）によるデータ変換を習得する

関数型っぽい書き方に慣れる

📁 ファイル構成
css
コピーする
編集する
module05/
├── README.md
├── main.js
└── test.js（任意）
📝 課題内容
🧪 課題01：配列の基本操作
以下の配列を定義し、要素数・最初の要素・最後の要素を出力せよ：

js
コピーする
編集する
const fruits = ["apple", "banana", "cherry"];
要素数を出力

最初の要素（fruits[0]）

最後の要素（fruits[fruits.length - 1]）

🧪 課題02：map() を使って変換
数値配列 [1, 2, 3, 4] を2倍した新しい配列を作れ：

js
コピーする
編集する
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8]
🧪 課題03：filter() を使って条件抽出
偶数だけを取り出した配列を作れ：

js
コピーする
編集する
const even = numbers.filter(n => n % 2 === 0);
// [2, 4]
🧪 課題04：reduce() で合計を求めよ
数値配列 [10, 20, 30] の合計を計算せよ：

js
コピーする
編集する
const sum = [10, 20, 30].reduce((acc, cur) => acc + cur, 0);
// 60
🧪 課題05（応用）：オブジェクト配列から条件抽出
以下のようなオブジェクト配列から、「年齢20以上」の名前一覧を取得せよ：

js
コピーする
編集する
const users = [
  { name: "Anakin", age: 28 },
  { name: "Luke", age: 19 },
  { name: "Leia", age: 23 }
];

// 出力: ["Anakin", "Leia"]
ヒント：

js
コピーする
編集する
const result = users
  .filter(user => user.age >= 20)
  .map(user => user.name);
🧪 課題06（挑戦）：文字列から頻度カウント
以下の配列の中にある文字列の出現回数をオブジェクトでカウントせよ：

js
コピーする
編集する
const animals = ["dog", "cat", "dog", "bird", "cat", "dog"];
出力：

js
コピーする
編集する
{
  dog: 3,
  cat: 2,
  bird: 1
}
ヒント：reduce() を使う

✅ 提出条件
すべての処理を main.js に記述

出力結果を console.log() で確認可能

README.md に map / filter / reduce の違いを簡単に記述すること

🧠 補足学習（任意）
map は「変換」、filter は「抽出」、reduce は「集計」

reduce() の初期値の意味

不変性（データを直接変えずに新しく作る思想）

