class Character {
    constructor(name, age, isJedi) {
      this.name = name;
      this._age = age;
      this.isJedi = isJedi;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      if (value >= 0) {
        this._age = value;
      }
    }
  
    introduce() {
      const role = this.isJedi ? "ジェダイです" : "ジェダイではありません";
      console.log(`私は${this.name}です。年齢は${this.age}です。${role}。`);
    }
  
    static compareAge(c1, c2) {
      if (c1.age > c2.age) {
        console.log(`${c1.name}の方が年上です`);
      } else if (c1.age < c2.age) {
        console.log(`${c2.name}の方が年上です`);
      } else {
        console.log(`${c1.name}と${c2.name}は同い年です`);
      }
    }
  
    train() {
      if (!this.isJedi) {
        console.log(`${this.name}は修行を始めた…ジェダイとなった！`);
        this.isJedi = true;
      } else {
        console.log(`${this.name}はすでにジェダイだ`);
      }
    }
  }
  

const han = new Character("Han Solo", 32, false);
han.train();
console.log(han.isJedi);
  
han.train();  