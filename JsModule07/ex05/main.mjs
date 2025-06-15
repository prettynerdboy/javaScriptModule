import { getUsersById } from "./api.mjs";

const user = await getUsersById(3);

console.log(user.name,user.email,user.website);