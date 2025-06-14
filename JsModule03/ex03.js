// async function test() {
//     return 42;
// }

// test().then(console.log);

function wait(ms){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("waited!");
        },ms);
    });
}

async function main(){
    console.log("処理開始");

    const msg = await wait(1000);
    console.log(msg);
    
    console.log("処理終了");
}

main();