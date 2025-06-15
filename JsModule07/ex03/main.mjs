import { getUsers } from "./api.mjs";

const users = await getUsers();

const names = users.map(user => user.name);

const numbererList = names.map((name,index)=>{
    return `${index + 1}.${name}`;
})
//復習、mapは引数を二つにすると配列の処理してるインデックスを渡すことができる。

console.log(numbererList.join('\n'));