JavaScript Module 11：ExpressでWebサーバを立てる
🎯 目的
Node.jsのWebアプリケーションフレームワーク「Express」を導入・活用

HTTPリクエスト（GET, POST）に対するルーティング処理を構築

Web APIの基礎構造を理解し、自分で実装できるようになる

📁 ファイル構成（例）
pgsql
コピーする
編集する
module11/
├── README.md
├── package.json
├── index.js             ← サーバー起動エントリ
└── routes/
    ├── hello.js         ← GET /hello 用のルート
    └── users.js         ← ユーザー関連API
📝 課題内容
🧪 課題01：Expressをインストールし、基本サーバを起動せよ
bash
コピーする
編集する
npm init -y
npm install express
index.js に以下の内容を書いてサーバーを起動せよ：

js
コピーする
編集する
import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
実行：node index.js

ブラウザまたはcurlで http://localhost:3000/ にアクセスし確認

🧪 課題02：別ファイルにルートを分割せよ（GET）
routes/hello.js に次のようなルートモジュールを作成：

js
コピーする
編集する
import express from "express";
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

export default router;
→ index.js 側でインポート：

js
コピーする
編集する
import helloRoute from "./routes/hello.js";
app.use(helloRoute);
🧪 課題03：POSTリクエストを受け取り、JSONで応答せよ
express.json() を使ってJSONボディをパース

/echo エンドポイントを用意し、リクエストボディをそのまま返す

js
コピーする
編集する
app.use(express.json());

app.post("/echo", (req, res) => {
  res.json({ received: req.body });
});
curlテスト例：

bash
コピーする
編集する
curl -X POST -H "Content-Type: application/json" \
  -d '{"message": "Hello Express"}' \
  http://localhost:3000/echo
🧪 課題04（応用）：ルーティングとパラメータ処理
以下のようなルーティングを追加せよ：

js
コピーする
編集する
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});
/users/123 にアクセスすると { userId: "123" } が返ること

🧪 課題05（挑戦）：複数ルートの構成と管理
routes/users.js を作成し、GET /users/:id, POST /users を定義

index.js 側では app.use("/users", userRoutes); の形でマウント

✅ 提出条件
サーバが正しく起動し、GET/POSTリクエストに応答すること

ルート分離が routes/ フォルダに構成されていること

README.md に以下を記載：

Expressとは何か

app.get() / app.post() の基本的な使い方

ルーティングの構成（分割）の利点

🧠 補足学習（任意）
middleware（app.use()）の概念

req.query, req.body, req.params の違い

RESTful API設計の概要

