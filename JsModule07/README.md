JavaScript Module 07：API通信とHTTPリクエスト（fetch / JSON）
🎯 目的
Web API からデータを取得し、活用する方法を習得する

fetch() による非同期HTTP通信を体験する

JSONデータの読み取り・整形・出力に慣れる

📁 ファイル構成
css
コピーする
編集する
module07/
├── README.md
├── main.mjs
└── api.mjs（API関数を定義）
📝 課題内容
🧪 課題01：fetch() を使ってAPIからデータ取得
次のような無料APIからデータを取得し、console.log() で出力せよ：

使用API：https://jsonplaceholder.typicode.com/users
（仮想ユーザーデータを取得できるREST API）

js
コピーする
編集する
// main.mjs
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
console.log(data);
🧪 課題02：ユーザー名一覧を抽出して出力せよ
課題01で取得したユーザーデータから、name プロパティだけを抜き出して出力せよ：

出力例（先頭3つ）：

python-repl
コピーする
編集する
Leanne Graham
Ervin Howell
Clementine Bauch
...
ヒント：

js
コピーする
編集する
data.map(user => user.name);
🧪 課題03：api.mjs にAPI呼び出し処理を分離せよ
API呼び出しを getUsers() 関数として api.mjs に定義し、main側で import して使えるようにせよ。

js
コピーする
編集する
// api.mjs
export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

// main.mjs
import { getUsers } from './api.mjs';

const users = await getUsers();
console.log(users);
🧪 課題04：名前の一覧を整形して表示
取得した名前一覧を、番号付きで次のように表示せよ：

markdown
コピーする
編集する
1. Leanne Graham
2. Ervin Howell
3. Clementine Bauch
...
ヒント：forEach() または map() と join('\n')

🧪 課題05（応用）：特定のユーザーIDを指定して詳細を取得
次のエンドポイントを使って、任意のユーザーIDに対応する詳細情報を取得せよ：

https://jsonplaceholder.typicode.com/users/3

関数 getUserById(id) を api.mjs に定義し、mainで呼び出して結果を出力：

js
コピーする
編集する
const user = await getUserById(3);
console.log(user.name, user.email, user.website);
🧪 課題06（挑戦）：エラー処理を追加
ネットワークエラーや無効なID（例：999）に備えて、次のようにエラーハンドリングを追加せよ：

js
コピーする
編集する
try {
  const user = await getUserById(999); // 存在しない
  console.log(user.name);
} catch (err) {
  console.error("取得失敗:", err.message);
}
存在しないユーザーなら throw new Error("ユーザーが見つかりません") など

✅ 提出条件
main.mjs は最小限にし、ロジックは api.mjs にまとめること

実行するとAPIからデータを取得し、整形して出力できること

README.md に fetch / async / JSON の説明を簡単に記述すること

🧠 補足学習（任意）
fetchはデフォルトでGETメソッド

APIの戻り値は多くがJSON形式

REST APIの基本構造：GET / POST / PUT / DELETE

statusコード（404, 500など）とその扱い

✅ このモジュールで得られる力
JSON構造の読み解き

実際の外部APIを呼び出す力

非同期処理のパターンを現実的に経験

🎯 今後の発展方向（希望に応じて）
ここまでの学習で「バックエンドJS（Node.js）」の基本を一通り習得したことになります。

次に進むとすれば以下の方向性があります：

分野	モジュール案
📦 Webアプリ化	Expressで簡易サーバー構築（Module 08）
🗃 データベース	SQLiteやJSONファイルへの書き込み
⚙ CLIアプリ	yargsでCLIツールを作る練習
🛠 フロント	HTML + JSでfetch結果を表示
🔒 認証	APIトークンやログイン処理の体験