JavaScript Module 02：クラスとインスタンス
🎯 目的
ES6以降の class 構文を理解する

コンストラクタを使ったインスタンス初期化を学ぶ

this を用いたプロパティ／メソッド定義の理解

C++のクラスとJavaScriptのクラスの違いを意識し始める

📁 ファイル構成
css
コピーする
編集する
module02/
├── README.md
├── main.js
└── test.js（任意）
📝 課題内容
🧪 課題01：クラスを定義せよ
次の要件を満たす Character クラスを定義しなさい：

name, age, isJedi を引数として受け取る

それらをプロパティに格納

生成されたインスタンスの内容を出力可能にする

js
コピーする
編集する
const anakin = new Character("Anakin", 28, true);
console.log(anakin.name); // "Anakin"
console.log(anakin.isJedi); // true
🧪 課題02：メソッドを定義せよ
Character クラスに introduce() メソッドを定義しなさい。

js
コピーする
編集する
anakin.introduce(); // → "私はAnakin、年齢は28歳、ジェダイです。"
※ isJedi によって「ジェダイです」「一般人です」と言い分けよう

🧪 課題03：getter / setter を定義せよ
age を外部から読み書きできるように、get age() / set age(value) を定義せよ。

js
コピーする
編集する
console.log(anakin.age); // 28
anakin.age = 30;
console.log(anakin.age); // 30
🧪 課題04（応用）：静的メソッドを定義せよ
クラスに静的メソッド compareAge(c1, c2) を定義し、次のように使えるようにせよ：

js
コピーする
編集する
const luke = new Character("Luke", 22, true);
Character.compareAge(anakin, luke); // → "Anakinの方が年上です"
🧪 課題05（挑戦）：クラス内の条件分岐と状態変化
Character に train() メソッドを定義し、isJedi = true に変化させよう。

js
コピーする
編集する
const han = new Character("Han Solo", 32, false);
han.train(); // → "Han Soloは修行を始めた…ジェダイとなった！"
console.log(han.isJedi); // true
✅ 提出条件
すべてのコードは main.js に記述

出力は console.log() で確認可能

クラス定義に constructor, method, getter/setter, static が含まれていること

クラスの説明と this の解説を README.md に記述すること

🧠 補足学習（任意）
JavaScriptのクラスは「構文糖衣」であり、内部ではprototypeベース

class 構文の背景（ES6）

Object.create() や prototype による旧スタイルとの違い