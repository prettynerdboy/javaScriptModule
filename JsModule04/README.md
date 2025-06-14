了解です。それでは次のステップ、JavaScript Module 04：エラー処理と例外設計 を提示します。
ここでは、エラーを検出し、適切に処理し、クラッシュを防ぐ ための基本を学びます。

🟦 JavaScript Module 04：エラー処理と例外設計
🎯 目的
throw / try / catch による例外処理の基本を理解する

関数内でのエラーハンドリングを実装できるようになる

非同期処理でのエラー処理 (async/await × try/catch) を実践できる

📁 ファイル構成
css
コピーする
編集する
module04/
├── README.md
├── main.js
└── test.js（任意）
📝 課題内容
🧪 課題01：throw を使って例外を発生させよ
次のような関数 divide(a, b) を定義しなさい：

b === 0 の場合はエラー "0では割れません" を throw で投げる

それ以外は通常の割り算を返す

js
コピーする
編集する
function divide(a, b) {
  if (b === 0) {
    throw new Error("0では割れません");
  }
  return a / b;
}
🧪 課題02：try / catch を使ってクラッシュを防げ
課題01の divide() を try/catch で包んで、安全に呼び出せ：

js
コピーする
編集する
try {
  const result = divide(10, 0);
  console.log("結果:", result);
} catch (err) {
  console.error("エラーが発生:", err.message);
}
🧪 課題03：finally の使いどころを確認せよ
次のコードにおいて、finally は常に実行されるか確認せよ：

js
コピーする
編集する
try {
  console.log("処理開始");
  throw new Error("問題発生！");
} catch (e) {
  console.error("キャッチ:", e.message);
} finally {
  console.log("後始末");
}
出力結果を README.md に書き、どうしてそうなるのかを説明

🧪 課題04：入力チェック関数を作れ
ユーザーからの入力（数値）を引数に取り、数値でなければ例外を投げる関数 parseInput(input) を作れ：

js
コピーする
編集する
function parseInput(input) {
  const parsed = Number(input);
  if (isNaN(parsed)) {
    throw new Error("数値を入力してください");
  }
  return parsed;
}
🧪 課題05（応用）：非同期関数でのエラー処理
前モジュールの waitAndMaybeFail(ms) を async/await + try/catch で呼び出し、安全に失敗を処理せよ。

js
コピーする
編集する
async function safeCall() {
  try {
    const res = await waitAndMaybeFail(1000);
    console.log("成功:", res);
  } catch (err) {
    console.error("失敗:", err.message);
  }
}
🧪 課題06（挑戦）：「例外を再スロー」する
例外を一度キャッチしてログに残し、再スローして呼び出し元に伝える関数を作れ：

js
コピーする
編集する
function validate(input) {
  try {
    parseInput(input);
  } catch (err) {
    console.warn("入力エラー:", err.message);
    throw err; // 呼び出し元に再スロー
  }
}
✅ 提出条件
すべての課題コードを main.js に記述

出力は console.log / console.error で確認可能

README.md に「例外処理の目的」「throwとcatchの役割」「finallyの挙動」を説明

🧠 補足学習（任意）
throw の内部動作（スタックトレース）

バグ vs 例外：区別と戦略

JavaScriptにおける「クラッシュしない設計」の基本方針