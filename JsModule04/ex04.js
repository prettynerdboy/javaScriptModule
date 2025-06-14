function waitAndMaybeFail(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const succesess = Math.random() > 0.5;
            if(succesess){
                resolve("成功");
            }else{
                reject(new Error("失敗"));
            }
        },ms);
    });
}

async function safecall() {
    try{
        console.log("非同期処理をawaitで待ちます");
        const res = await waitAndMaybeFail(1000);
        console.log("result :",res);
    }catch(err){
        console.error("result:",err.message);
    }finally{
        console.log("さっきの復習です、ここは絶対実行されます");
    }
}

function main(){
    safecall();
}

main();