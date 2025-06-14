class Character {
    constructor(name, age, isJedi) {
      this.name = name;
      this.age = age;
      this.isJedi = isJedi;
    }
  }
  
  // インスタンスを生成
  const anakin = new Character("Anakin", 28, true);
  
  // プロパティを出力
  console.log(anakin.name);     // "Anakin"
  console.log(anakin.age);      // 28
  console.log(anakin.isJedi);   // true
  