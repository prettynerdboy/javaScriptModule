class Character {
    constructor(name,age,isJedi){
        this.name = name;
        this._age = age;
        this.isJedi = isJedi;
    };
    introduce(){
        const role = this.isJedi ? "私はジェダイです" : "私はジェダイではありません";
        console.log(`私は${this.name}です。年齢は${this.age}です。${role}。`);
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(value >=0){
            this._age = value;
        }
        else{
            console.log("set age error");
        }
    }
}

const anakin = new Character("Anakin",24,true);
console.log(anakin.age);
anakin.age=80;

console.log(anakin.age);

// c＋＋と違ってセッターとゲッターは自己定義の関数ではなく特殊構文の一つになってる。
// 簡単にいうとプロパティ風に見せかけた関数。
// 呼び出しはプロパティだけどやってることはメソッド