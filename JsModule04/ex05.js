function parseInput(input){
    const parsed = Number(input);
    if(Number.isNaN(parsed)){
        throw new Error("数値を入れてネ！");
    }
    return parsed;
}

function validate(input){
    try{
        parseInput(input);
    }catch(err){
        console.warn("入力エラー:",err.message);
        throw err;
    }
}

function main(){
    try{
        validate("abc");
    }catch(err){
        console.error("アプリ全体のエラー処理:",err.message);
    }
}

main();