function wait(ms) {
    return new Promise(resolve=>{
        setTimeout(resolve,ms);
    });
}

async function main() {
    await wait(1000);
    console.log(1);

    await wait(1000);
    console.log(2);

    await wait(1000);
    console.log(3);
}

main();