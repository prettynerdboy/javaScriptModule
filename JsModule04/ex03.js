function parseInput(input){
    const parsed = Number(input);
    if(isNaN(parsed)){
        throw new Error("数値を入力してください");
    }
    return parsed;
}
// Number()は数値変換


function main(){
try{
    const value = parseInput("abc");
    console.log("数値に変換",value);
}catch(err){
    console.error("error occured:",err.message);
}
}

main()