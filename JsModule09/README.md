JavaScript Module 09：コールバック地獄とPromise設計
🎯 目的
ネストした非同期処理（コールバック地獄）を体験する

Promiseチェーンを正しく設計できるようになる

async/awaitによるコードの読みやすさを実感する

📁 ファイル構成
css
コピーする
編集する
module09/
├── README.md
├── main.js
└── steps/
    ├── callback_hell.js
    ├── promise_chain.js
    └── async_await.js
📝 課題内容
🧪 課題01：コールバック地獄を実装せよ（callback_hell.js）
次の3ステップを、setTimeout() を使ってネスト形式で1秒ずつ遅らせて出力する：

js
コピーする
編集する
Step 1
Step 2
Step 3
js
コピーする
編集する
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
ネストが深く、読みにくいことを確認せよ

README.md に「なぜ読みにくくなるか」を簡単に記述

🧪 課題02：Promiseチェーンに書き換えよ（promise_chain.js）
次の関数 delayStep(msg, ms) を定義し、それを使って上記3ステップをPromiseチェーンで書き直せ：

js
コピーする
編集する
function delayStep(msg, ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, ms);
  });
}
使用例：

js
コピーする
編集する
delayStep("Step 1", 1000)
  .then(() => delayStep("Step 2", 1000))
  .then(() => delayStep("Step 3", 1000));
.then() チェーンで構造がスリムになることを実感

🧪 課題03：async/await によるリファクタ（async_await.js）
上記の delayStep() を async/await で使って、最も読みやすい形に書き換えよ：

js
コピーする
編集する
async function run() {
  await delayStep("Step 1", 1000);
  await delayStep("Step 2", 1000);
  await delayStep("Step 3", 1000);
}
run();
try/catch を使って例外対応も追加しておくと理想的

🧪 課題04（応用）：50%の確率で失敗するPromiseチェーンを安全に書け
js
コピーする
編集する
function unstableStep(msg, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log(msg);
        resolve();
      } else {
        reject(new Error(`${msg} に失敗しました`));
      }
    }, ms);
  });
}
これを使って次のように呼び出せ：

js
コピーする
編集する
async function run() {
  try {
    await unstableStep("Step 1", 1000);
    await unstableStep("Step 2", 1000);
    await unstableStep("Step 3", 1000);
  } catch (err) {
    console.error("エラー:", err.message);
  }
}
catch の位置に注意

エラー発生時に以降のステップを中断することを確認

✅ 提出条件
各ステップを別ファイルに分けて実装

実行順が適切か console.log() で確認できること

README.md に以下の内容を記述：

コールバック地獄がなぜ問題なのか

Promiseチェーンでどう改善されるか

async/awaitのメリットと注意点

🧠 補足学習（任意）
.catch() と try/catch の違い

非同期の例外は同期とは違ってスルーされやすい

async関数の戻り値は常に Promise

