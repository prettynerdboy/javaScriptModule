JavaScript Module 08：this とアロー関数の挙動
🎯 目的
this が文脈によって変わることを体感する

アロー関数が this をバインドしないことの意味を理解する

オブジェクトメソッド内での this の扱いに慣れる

📁 ファイル構成
css
コピーする
編集する
module08/
├── README.md
├── main.js
└── this_examples/
    ├── basic_this.js
    ├── arrow_this.js
    └── trap_this.js
📝 課題内容
🧪 課題01：基本的な this の挙動
次のコードを basic_this.js に記述し、何が出力されるか予想してから実行せよ。

js
コピーする
編集する
const obj = {
  name: "Anakin",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

obj.greet(); // 何が出る？ thisはどこを指す？
🧪 課題02：アロー関数と this
次のコードを arrow_this.js に記述し、何が出るか予想してから実行せよ。

js
コピーする
編集する
const obj = {
  name: "Anakin",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  }
};

obj.greet(); // thisはどこを指してる？ なぜundefinedになる？
🧪 課題03：setTimeout の this トラップ
trap_this.js に以下のコードを記述し、問題を特定して修正せよ。

js
コピーする
編集する
const person = {
  name: "Leia",
  greet: function () {
    setTimeout(function () {
      console.log("Hi, I'm " + this.name); // ← undefinedになる！
    }, 1000);
  }
};

person.greet();
修正方法例1：const self = this を使う

修正方法例2：アロー関数に書き換える

🧪 課題04：クラス内のアロー関数
以下のようなクラスを作成し、this が正しく使えるように修正せよ：

js
コピーする
編集する
class Counter {
  constructor() {
    this.count = 0;
  }

  start() {
    setInterval(function () {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}

const c = new Counter();
c.start(); // どうして NaN or エラーになる？
setInterval の中をアロー関数にするとどうなる？

✅ 提出条件
各 *.js ファイルに予想→実行→結果コメントを記載

README.md に次の3点をまとめる：

this は何を指すのか（ざっくり）

アロー関数がどうして this を持たないのか

setTimeout/setIntervalで起こる this 問題とその対処法

🧠 補足学習（任意）
this は呼び出し方によって決まる（定義された場所ではない）

アロー関数は this を親スコープから自動的に引き継ぐ

bind() / call() / apply() を使えば this を固定できる