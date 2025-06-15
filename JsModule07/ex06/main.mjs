import { getUsersById } from "./api.mjs";

try{
    const user = await getUsersById(999);
    console.log(user.name);
}catch(err){
    console.log("error :",err.message);
}