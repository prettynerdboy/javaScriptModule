function divide(a,b){
    if(b === 0){
        throw new Error("0では割れない");
    }
    return a/b;
}

// ==	等価演算子（型変換ありで比較）	"5" == 5 → true
// ===	厳密等価演算子（型も値も同じか）	"5" === 5 → false


function main(){
    try{
        const result = divide(10,0);
        console.log("result:",result);
    }catch(err){
        console.error("error occured:",err.message);
    }
}
main()