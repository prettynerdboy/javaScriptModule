🟦 JavaScript Module 00：最初の一歩
🎯 目的
JavaScriptの基本構文（変数、定数、関数、出力）の理解

Node.js環境でJSを実行できるようになる

JavaScriptで最も基礎的なコードを「書いて動かす」

📁 ファイル構成
編集する
module00/
├── README.md         # 課題の説明書（この内容）
├── main.js           # 課題のメインコードを書くファイル
└── test.js           # 出力チェック用テスト（任意）
📝 課題内容
🧪 課題01：Hello, JavaScript!
main.jsに、次の文字列を出力するコードを書きなさい：

Hello, JavaScript!
使用関数：console.log

🧪 課題02：変数と型の基本
次の変数を定義し、それぞれの型（typeof）と中身を出力しなさい：

let name = "Anakin";
let age = 28;
let isJedi = true;
出力例：

name (string): Anakin
age (number): 28
isJedi (boolean): true

🧪 課題03：関数定義と呼び出し
次の仕様を満たす関数 greet を定義しなさい：

引数に名前（string）を受け取り

Hello, ○○! という文字列を返す関数

例：
greet("Obi-Wan"); // → "Hello, Obi-Wan!"

🧪 課題04：定数と再代入
次のコードを書いて、なぜエラーになるのかを README.md に説明せよ：

const planet = "Tatooine";
planet = "Hoth";
🧪 課題05（応用）：あなたの自己紹介関数
次のような関数 introduceYourself を作成しなさい：

name, age, hobby を引数として受け取る

私は○○です。年齢は○○歳、趣味は○○です。 の形で出力する

例：
introduceYourself("Anakin", 28, "ポッドレース");
// → 私はAnakinです。年齢は28歳、趣味はポッドレースです。

✅ 提出条件
すべての出力が console.log() で確認できること

コードが正しく動作し、構文エラーがないこと

自作のコードにコメントをつけて、最低限の説明があること

🧠 補足学習（任意）
node main.js で実行する方法を確認

JavaScriptの型と動的型付けの概念

アロー関数（const greet = name => ...）

