class Character{
    constructor(name,age,isJedi){
        this.name = name;
        this._age = age;
        this.isJedi = isJedi;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(value >=0)
            this._age = value;
        else
            console.log("set age error");
    }
    introdece(){
        const role = this.isJedi ? "私はジェダイです" : "私はジェダイではありません";
        console.log(`私は${this.name}です。年齢は${this.age}です。${role}。`);
    }
    static compareAge(c1,c2){
        if (c1.age > c2.age) {
            console.log(`${c1.name}の方が年上です`);
          } else if (c1.age < c2.age) {
            console.log(`${c2.name}の方が年上です`);
          } else {
            console.log(`${c1.name}と${c2.name}は同い年です`);
          }
    }
}

const anakin = new Character("Anakin", 28, true);
const luke = new Character("Luke", 22, true);

Character.compareAge(anakin, luke);