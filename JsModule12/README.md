JavaScript Module 12：ユニットテスト自動化（Jest入門）
🎯 目的
JavaScriptのコードに対して自動テストを導入できるようになる

Jest フレームワークを使って関数の正しさを検証する方法を学ぶ

「テスト駆動開発（TDD）」や「再帰的な確認方法」を体験する

📁 ファイル構成（例）
python
コピーする
編集する
module12/
├── README.md
├── package.json
├── sum.js               ← テスト対象コード
└── sum.test.js          ← テストファイル
📝 課題内容
🧪 課題01：Jestを導入せよ
bash
コピーする
編集する
npm init -y
npm install --save-dev jest
package.json に "type": "module" を追加

"scripts" セクションに以下を追記：

json
コピーする
編集する
"scripts": {
  "test": "jest"
}
🧪 課題02：関数のテストを書いてみる
sum.js に次の関数を定義：

js
コピーする
編集する
export function sum(a, b) {
  return a + b;
}
sum.test.js に以下のようなテストコードを書く：

js
コピーする
編集する
import { sum } from "./sum.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
実行して確認：

bash
コピーする
編集する
npm test
🧪 課題03：複数のアサーション（テスト項目）を追加
0, 負数、浮動小数点のケースも追加

js
コピーする
編集する
test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("adds -1 + -2 to equal -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});
🧪 課題04：例外をテストせよ
divide.js に次の関数を実装：

js
コピーする
編集する
export function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
divide.test.js を作成し、正常系と異常系の両方をテスト：

js
コピーする
編集する
import { divide } from "./divide.js";

test("divides 6 / 3 to equal 2", () => {
  expect(divide(6, 3)).toBe(2);
});

test("throws error when dividing by zero", () => {
  expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
});
🧪 課題05（応用）：非同期関数のテスト
fetchData.js に以下を定義（擬似API）：

js
コピーする
編集する
export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data"), 1000);
  });
}
テストコード：

js
コピーする
編集する
import { fetchData } from "./fetchData.js";

test("fetches data asynchronously", async () => {
  const data = await fetchData();
  expect(data).toBe("data");
});
✅ 提出条件
各テストファイルが .test.js 形式で書かれていること

npm test で全テストが通ること

README.md に以下を記述：

Jestの導入方法

expect() と toBe() など基本マッチャ

テストの意義（「安心できるコードとは何か」）

🧠 補足学習（任意）
.toEqual()（オブジェクトや配列用）

.toBeTruthy(), .toBeFalsy(), .toBeNull(), .toBeUndefined()

beforeEach() / afterEach() による事前処理

