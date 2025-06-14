JavaScript Module 10：イベントループと非同期実行順
🎯 目的
JavaScriptの実行コンテキストとイベントループの構造を理解する

setTimeout, Promise, queueMicrotask が「いつ」動くかを体感する

「なんでPromiseが先に実行されるの？」という疑問を解消する

📁 ファイル構成
css
コピーする
編集する
module10/
├── README.md
├── main.js
└── steps/
    ├── sync_vs_async.js
    ├── promise_vs_timeout.js
    └── microtask_vs_macrotask.js
📝 課題内容
🧪 課題01：同期 vs 非同期（sync_vs_async.js）
次のコードを実行し、出力順を予想してから確認せよ：

js
コピーする
編集する
console.log("1. 同期処理");

setTimeout(() => {
  console.log("2. setTimeout（非同期）");
}, 0);

console.log("3. また同期処理");
出力結果は？

🧪 課題02：PromiseとsetTimeoutの順番（promise_vs_timeout.js）
次のコードで出力される順番を予想・確認せよ：

js
コピーする
編集する
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
なぜ promise が timeout より先なのか？

README.md に簡潔に説明を記述

🧪 課題03：queueMicrotask の順序確認（microtask_vs_macrotask.js）
js
コピーする
編集する
console.log("A");

queueMicrotask(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});

setTimeout(() => {
  console.log("D");
}, 0);

console.log("E");
予想出力順：

mathematica
コピーする
編集する
A
E
B
C
D
→ 実際はどうなる？
→ なぜ？（ヒント：PromiseもMicrotask、ただし順は…）

🧪 課題04（応用）：重い同期処理が非同期をブロックする例
js
コピーする
編集する
console.log("Start");

setTimeout(() => {
  console.log("Timeout finished");
}, 0);

for (let i = 0; i < 1e9; i++) {
  // 重い処理
}

console.log("End");
setTimeout(..., 0) でも即時実行されない理由を確認せよ

JSのイベントループはシングルスレッドであるため、同期処理中に非同期は挟めない

✅ 提出条件
各ファイルごとに「出力予想 → 実行 → 解説コメント」を残す

README.md に以下をまとめる：

マクロタスクとマイクロタスクの違い

実行順序の決定ロジック（イベントループの流れ）

ブラウザとNode.jsでの違いがあるか？

🧠 補足学習（任意）
Microtask：Promise.then, queueMicrotask

Macrotask：setTimeout, setInterval, setImmediate

process.nextTick()（Node.jsのみ）

