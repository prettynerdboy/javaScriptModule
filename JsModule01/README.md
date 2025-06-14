JavaScript Module 01：オブジェクトとメソッドの基本
🎯 目的
JavaScriptにおけるオブジェクトの構造を理解する

プロパティの読み書きとメソッドの定義を習得する

this の基本的な使い方に触れる

📁 ファイル構成
css
コピーする
編集する
module01/
├── README.md
├── main.js
└── test.js（任意）
📝 課題内容
🧪 課題01：キャラクターオブジェクトを定義せよ
以下のプロパティを持つキャラクターオブジェクト character を作成しなさい：

name（文字列）

age（数値）

isJedi（真偽値）

js
コピーする
編集する
// 例
const character = {
  name: "Anakin",
  age: 28,
  isJedi: true
};
その内容を console.log() で出力せよ。

🧪 課題02：プロパティへのアクセスと変更
character オブジェクトの age を +1 し、出力せよ。

js
コピーする
編集する
character.age = character.age + 1;
console.log(character.age); // 29
🧪 課題03：メソッドを追加せよ
character オブジェクトに greet という関数を追加し、次の出力をするようにせよ：

js
コピーする
編集する
character.greet(); // → "こんにちは、私はAnakinです。"
🧪 課題04：this を使ってプロパティにアクセス
greet メソッド内で this.name を使って name を参照せよ。

js
コピーする
編集する
greet: function() {
  console.log(`こんにちは、私は${this.name}です。`);
}
🧪 課題05（応用）：キャラクターに攻撃メソッドを追加
次のようなメソッド attack(target) を追加し、出力を行え：

js
コピーする
編集する
character.attack("Dooku");
// → "AnakinはDookuを攻撃した！"
🧪 課題06（挑戦）：複数キャラクターを管理せよ
複数のキャラクターを配列で管理し、それぞれの greet() を順に呼び出すコードを書け。

js
コピーする
編集する
const characters = [char1, char2, char3];
for (let c of characters) {
  c.greet();
}
✅ 提出条件
console.log()によってすべての出力が確認できること

main.jsに自分でコメントをつけること

thisの役割について簡単に README.md に書くこと

🧠 補足学習（任意）
オブジェクトと配列の違い

thisの挙動（グローバル関数との違い）

アロー関数を使うとthisがどうなるか？

