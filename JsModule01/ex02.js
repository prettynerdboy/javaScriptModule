class Character {
    constructor(name,age,isJedi){
        this.name = name;
        this.age = age;
        this.isJedi = isJedi;
    }
    greet(){
        console.log(`私は${this.name}です。`);
    }
    attack(name){
        console.log(`${this.name}は${name}を攻撃した。`)
    }
}

// JavaScriptのクラスでは
// constructor 内で this.○○ = ... と書いた時点でそのプロパティが生成される。

//クラスからオブジェクトを作る時はnewが必要

const characters = [
    new Character("Anakin",29,true),
    new Character("Obiwan",47,true),
    new Character("c3po",300,false)
];

for(const c of characters){
    c.greet();
    c.attack("dummy");
}

