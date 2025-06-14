class Character{
    constructor(name,age,isJedai){
        this.name = name;
        this.age = age;
        this.isJedai = isJedai
    };
    introduce(){
        const role = this.isJedai ? "ジェダイです" : "ジェダイではありません"
        console.log(`私の名前は${this.name}です。年齢は${this.age}です。${role}。`);
    };
}

const me = new Character("Anakin",27,true);
const capman = new Character("lameboy",23,false);

me.introduce();
capman.introduce();