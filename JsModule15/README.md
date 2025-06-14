 JavaScript Module 15：HTML + JSでデータをブラウザ表示
🎯 目的
HTMLファイル上で JavaScript を使い、データを画面に動的に表示する

fetch() を使ってローカルJSONファイルやサーバーからデータ取得する

DOM操作を通じて、Webページにプログラムで要素を追加・更新する

📁 ファイル構成（例）
pgsql
コピーする
編集する
module15/
├── index.html
├── script.js
└── data/
    └── users.json
📝 課題内容
🧪 課題01：基本HTML + 外部JSの読み込み
index.html に以下のような構成を作成：

html
コピーする
編集する
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ユーザー一覧</title>
</head>
<body>
  <h1>ユーザー一覧</h1>
  <ul id="userList"></ul>

  <script src="script.js"></script>
</body>
</html>
🧪 課題02：ローカルの JSON ファイルを読み込んで表示
data/users.json：

json
コピーする
編集する
[
  { "name": "Anakin", "age": 28 },
  { "name": "Leia", "age": 23 }
]
script.js：

js
コピーする
編集する
fetch("data/users.json")
  .then(res => res.json())
  .then(users => {
    const list = document.getElementById("userList");
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.age})`;
      list.appendChild(li);
    });
  });
ブラウザで index.html を開き、ユーザー一覧が表示されること

🧪 課題03：表示データを条件付きでフィルタ表示
年齢20以上のユーザーのみ表示するように修正：

js
コピーする
編集する
users.filter(u => u.age >= 20).forEach(user => {
  // 表示処理
});
🧪 課題04（応用）：検索ボックスによるフィルタ機能
<input id="search"> を設置し、入力された名前に一致するユーザーだけを表示するよう実装

html
コピーする
編集する
<input id="search" placeholder="名前で検索" />
入力イベントで users.filter(user => user.name.includes(keyword)) を使ってフィルタ

🧪 課題05（挑戦）：Expressと組み合わせてAPIから取得
Module11のExpressサーバーを localhost:3000/users で起動

HTMLページ側の fetch() を http://localhost:3000/users に変更し、API連携型Web表示に進化

✅ 提出条件
ブラウザ上でデータが表示される

DOMが createElement や appendChild で操作されている

README.md に以下を記載：

HTMLとJSの連携方法（<script src=...>)

fetchで外部JSONを扱う方法

DOM操作の基本（getElementById, createElement）

🧠 補足学習（任意）
defer 属性とJS実行タイミング

DOMContentLoadedイベント

innerHTML vs createElement

✅ 次の候補（Module 16）
テーマ	内容
🧩 Module 16: Node × SQLite	本格的なデータベース（SQLite）導入
🔁 Module 17: REST API構築	Express + 永続化でCRUD APIを実装
🛠 Module 18: 状態管理とリスト更新	JSで再描画・状態変更するフロント処理（リスト追加・削除）