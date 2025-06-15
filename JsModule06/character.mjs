export class Character{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`私は${this.name}です。`);
    }
}

// 変数、関数やクラスなど、使いたいものの頭にexportをつける。
// 使いたいファイルでimportをする。