const users = [
    { name: "Anakin", age: 28 },
    { name: "Luke", age: 19 },
    { name: "Leia", age: 23 }
  ];

function main(){

    over20user =users.filter(n=> n.age>=20);
    over20user.map(n=>console.log(n.name));
}

main();