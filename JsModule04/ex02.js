function divide(a,b){
    if(b === 0){
        throw new Error("0では割れない");
    }
    return a/b;
}

function main(){
    try{
        const result = divide(10,0);
        console.log("result:",result);
    }catch(err){
        console.error("error occured:",err.message);
    }finally{
        console.log("finally:絶対に実行されるやーつ");
    }
    try{
        const result = divide(10,2);
        console.log("result:",result);
    }catch(err){
        console.error("error occured:",err.message);
    }finally{
        console.log("finally:絶対に実行されるやーつ");
    }
}
main()