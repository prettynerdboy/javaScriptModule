avaScript Module 13：CLIツール開発（yargs入門）
🎯 目的
コマンドライン引数（argv）を解析して処理を分岐できるようになる

yargs を使って 引数ありCLIツール を構築する

実行形式：node app.js --name=Anakin --greet

📁 ファイル構成（例）
go
コピーする
編集する
module13/
├── README.md
├── package.json
├── app.js               ← CLIエントリポイント
└── commands/
    ├── greet.js
    └── calc.js
📝 課題内容
🧪 課題01：yargsをインストールし基本設定をせよ
bash
コピーする
編集する
npm init -y
npm install yargs
app.js の最小コード：

js
コピーする
編集する
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

if (argv.name) {
  console.log(`Hello, ${argv.name}`);
}
実行例：

bash
コピーする
編集する
node app.js --name=Anakin
# → Hello, Anakin
🧪 課題02：コマンド方式で greet コマンドを追加
bash
コピーする
編集する
node app.js greet --name=Leia
# → "こんにちは、Leia！"
greet.js を用意：

js
コピーする
編集する
export const command = "greet";
export const describe = "名前付きで挨拶する";

export const builder = {
  name: {
    describe: "ユーザーの名前",
    demandOption: true,
    type: "string",
  },
};

export const handler = (argv) => {
  console.log(`こんにちは、${argv.name}！`);
};
→ app.js にコマンド登録：

js
コピーする
編集する
import greet from "./commands/greet.js";

yargs(hideBin(process.argv))
  .command(greet)
  .demandCommand()
  .help()
  .argv;
🧪 課題03：四則演算コマンドを作成せよ
bash
コピーする
編集する
node app.js calc --op=add --a=10 --b=5
# → 結果: 15
calc.js：

js
コピーする
編集する
export const command = "calc";
export const describe = "計算を行う";

export const builder = {
  op: {
    choices: ["add", "sub", "mul", "div"],
    demandOption: true,
  },
  a: {
    type: "number",
    demandOption: true,
  },
  b: {
    type: "number",
    demandOption: true,
  },
};

export const handler = ({ op, a, b }) => {
  let result;
  switch (op) {
    case "add": result = a + b; break;
    case "sub": result = a - b; break;
    case "mul": result = a * b; break;
    case "div": result = b === 0 ? "エラー: 0除算" : a / b; break;
  }
  console.log(`結果: ${result}`);
};
🧪 課題04（応用）：日時コマンドを追加
bash
コピーする
編集する
node app.js time --locale=ja
# → 現在日時: 2025年6月14日（土） 10:00
✅ 提出条件
yargs を使用してコマンド＋引数が正しく処理できること

すべてのコマンドが commands/ に整理されていること

README.md に以下を記載：

yargs の概要と使い方

コマンドの定義方法（builder/handler）

🧠 補足学習（任意）
yargs.option() vs command().builder

複数の引数の組み合わせ制限（カスタムバリデーション）

yargs-parser の挙動（実体）