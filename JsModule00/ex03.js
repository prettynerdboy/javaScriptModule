function greet(name)
{
    return(console.log(`Hello ${name}!`));
}

const arrowGreet = name => `Hello ${name}!`;
// 引数が一つなら括弧はいらない

const order = (sir,contents) =>{
    return `${sir}:${contents}`;
}
greet("Anakin");
console.log(arrowGreet("obiwan"));
console.log(order("anakin","order66"));