const character = {
    name:"Anakin",
    age:27,
    isJedi:true,
    greet:function(){
        console.log(`私の名前は${this.name}です。年齢は${this.age}です`);
    },
    attack:function(name){
        console.log(`${this.name}は${name}を攻撃した`);
    },
};

console.log(character);

console.log(`character name is${character.name}`);
console.log(`character age is${character.age}`);
console.log(`character isJedi is${character.isJedi}`);
character.greet();

character.attack("dummy");