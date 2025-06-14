JavaScript Module 03：非同期処理とPromise
🎯 目的
非同期処理の仕組みを理解する（同期 vs 非同期）

setTimeout、Promise、async/await を使いこなせるようになる

JavaScriptの「順番通りに動かない」特性に慣れる

📁 ファイル構成
css
コピーする
編集する
module03/
├── README.md
├── main.js
└── test.js（任意）
📝 課題内容
🧪 課題01：setTimeoutを使って非同期処理を体験せよ
以下のコードを main.js に書き、出力順を確認せよ：

js
コピーする
編集する
console.log("1. 開始");

setTimeout(() => {
  console.log("2. 1秒後の処理");
}, 1000);

console.log("3. 終了");
出力結果と、なぜその順になるかを README.md に説明

🧪 課題02：Promiseを自作して遅延処理を実装せよ
次の仕様を満たす wait(ms) 関数を作成せよ：

msミリ秒だけ待ってから "waited!" を返す Promise を返す関数

js
コピーする
編集する
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("waited!");
    }, ms);
  });
}
使い方：

js
コピーする
編集する
wait(1000).then(msg => console.log(msg)); // → 約1秒後に "waited!"
🧪 課題03：async / await を使って書き換えよ
課題02の .then() を async/await を使って次のように書き換えよ：

js
コピーする
編集する
async function main() {
  console.log("処理開始");
  const msg = await wait(1000);
  console.log(msg);
  console.log("処理終了");
}
main();
async 関数での「中断 → 再開」の流れを理解すること

🧪 課題04：複数の非同期処理を順に実行せよ
以下のように、wait() を使って3秒かけて1秒ごとに数字を出力せよ：

js
コピーする
編集する
// 期待出力（1秒ごとに表示）
1
2
3
🧪 課題05（応用）：失敗するPromiseとcatch
waitAndMaybeFail(ms) を作成し、50%の確率で失敗する非同期関数を作れ：

js
コピーする
編集する
function waitAndMaybeFail(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("成功！") : reject("失敗！");
    }, ms);
  });
}
これを async/await で使い、try/catch を用いて結果を安全に扱え：

js
コピーする
編集する
try {
  const result = await waitAndMaybeFail(1000);
  console.log(result);
} catch (err) {
  console.error("エラー:", err);
}
✅ 提出条件
すべてのコードを main.js に記述

console.log() によって出力順を確認できること

README.md に「なぜこの順番で出力されるか」を図または文章で説明すること

async/await の使い方を自分の言葉で説明すること

🧠 補足学習（任意）
イベントループとコールスタック

Promise の状態：pending / fulfilled / rejected

.catch() と try/catch の使い分け