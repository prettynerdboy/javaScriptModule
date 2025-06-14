function waitAndMaybeFail(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Math.random() > 0.5
            ? resolve("succesed")
            : reject("failed");
        },ms);
    });
}

async function main() {
    try {
        const result = await waitAndMaybeFail(1000);
        console.log(result);
    } catch(err){
        console.error("error",err);
    }
}

main();