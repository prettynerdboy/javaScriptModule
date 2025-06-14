JavaScript Module 14：データ永続化（ファイルへの読み書き）
🎯 目的
Node.jsの fs モジュールでファイルにデータを書き込めるようになる

JSON形式の構造化データを保存・読み取りできるようになる

非同期ファイル処理と同期処理の違いを体感する

📁 ファイル構成（例）
kotlin
コピーする
編集する
module14/
├── README.md
├── app.js
└── data/
    └── users.json
📝 課題内容
🧪 課題01：ファイルに文字列を書き込む
fs.writeFileSync() を使って、data/users.json に以下を書き込み：

js
コピーする
編集する
import fs from "fs";

const json = `[
  { "name": "Anakin", "age": 28 },
  { "name": "Leia", "age": 23 }
]`;

fs.writeFileSync("data/users.json", json);
console.log("ファイルに書き込みました");
🧪 課題02：ファイルからデータを読み込み、出力する
js
コピーする
編集する
const raw = fs.readFileSync("data/users.json", "utf-8");
const users = JSON.parse(raw);

console.log("ユーザー一覧：");
users.forEach(user => console.log(user.name, user.age));
🧪 課題03：新しいユーザーを追加して保存
次のようにデータを読み込み、配列に1件追加し、上書き保存せよ：

js
コピーする
編集する
const newUser = { name: "Luke", age: 22 };
users.push(newUser);
fs.writeFileSync("data/users.json", JSON.stringify(users, null, 2));
console.log("ユーザーを追加しました");
🧪 課題04：非同期版（Promise）で書き換えよ
fs/promises を使用して非同期処理に書き換え：

js
コピーする
編集する
import { readFile, writeFile } from "fs/promises";

const raw = await readFile("data/users.json", "utf-8");
const users = JSON.parse(raw);
users.push({ name: "Obi-Wan", age: 40 });

await writeFile("data/users.json", JSON.stringify(users, null, 2));
console.log("非同期で書き込み完了");
🧪 課題05（応用）：CLI引数でユーザー追加
bash
コピーする
編集する
node app.js --name=Han --age=32
CLI引数（process.argv または yargs）を受け取り、
ユーザーを users.json に追記して保存する処理を実装せよ

✅ 提出条件
ファイル読み書きが適切に行われる

JSONの整形 (JSON.stringify(data, null, 2)) が行われている

README.md に次を記述：

fs モジュールの使い方（同期/非同期）

JSON.parse / JSON.stringify の用途

🧠 補足学習（任意）
ファイルが存在しないときの対策（try/catch）

fs.existsSync() や fs.mkdirSync() を使った事前準備

巨大なデータに対するストリーム処理（今回未扱い）