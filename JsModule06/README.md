JavaScript Module 06：モジュールとファイル分割（import/export）
🎯 目的
JavaScriptのモジュール構文（export / import）を習得する

複数ファイルにコードを分けて再利用・管理できるようにする

Node.jsのES Modules形式（.mjs）を使って実行する体験をする

📁 ファイル構成（例）
css
コピーする
編集する
module06/
├── README.md
├── main.mjs           ← メイン実行ファイル
├── character.mjs      ← キャラクタークラス定義
└── utils.mjs          ← 汎用関数など
📝 課題内容
🧪 課題01：キャラクタークラスを別ファイルに切り出せ
前モジュールで使用した Character クラスを character.mjs に定義し、export せよ：

js
コピーする
編集する
// character.mjs
export class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`私は${this.name}です。`);
  }
}
🧪 課題02：main.mjs で Character を import して使え
js
コピーする
編集する
// main.mjs
import { Character } from './character.mjs';

const obiwan = new Character("Obi-Wan", 45);
obiwan.greet(); // → 私はObi-Wanです。
🧪 課題03：ユーティリティ関数を別ファイルにして共通化
次のような関数 printLine(msg) を utils.mjs に定義し、どこからでも使えるようにせよ：

js
コピーする
編集する
// utils.mjs
export function printLine(msg) {
  console.log("===" + msg + "===");
}
使用例（main.mjs）：

js
コピーする
編集する
import { printLine } from './utils.mjs';
printLine("開始");
🧪 課題04：デフォルトエクスポートと名前付きエクスポートの違いを体験せよ
utils.mjs に以下のようなエクスポートを用意し、それぞれを main.mjs から使ってみよ：

js
コピーする
編集する
// デフォルトエクスポート
export default function sayHello(name) {
  console.log(`こんにちは、${name}さん！`);
}

// 名前付きエクスポート
export function bye(name) {
  console.log(`さようなら、${name}さん！`);
}
使用例（main.mjs）：

js
コピーする
編集する
import sayHello, { bye } from './utils.mjs';
sayHello("Anakin");
bye("Anakin");
🧪 課題05（挑戦）：複数キャラクターを別ファイルで定義し、mainで管理
次の構成で、複数キャラをモジュールごとに定義し、main.mjs で一覧として出力せよ：

コピーする
編集する
module06/
├── characters/
│   ├── anakin.mjs
│   ├── obiwan.mjs
│   └── yoda.mjs
各ファイルで Character を作成し export

main.mjs ですべて import して greet() を順に呼び出す

✅ 実行方法
bash
コピーする
編集する
node main.mjs
※ package.json に "type": "module" を設定しておくか、拡張子 .mjs を使用する必要があります。

✅ 提出条件
すべてのファイルがモジュール構成で正しく動作すること

main.mjs は import のみで構成されること

README.md に default export / named export の違いを説明すること

🧠 補足学習（任意）
CommonJS (require) との違い

import先のファイルが相対パス（./）である必要があること

type="module" を package.json に入れると .js 拡張子でもESMが使える