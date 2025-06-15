export function printLine(msg){
    console.log("===" + msg + "===");
}

export default function sayHello(name){
    console.log(`こんにちは、${name}さん`);
}
//default exportは１ファイルにつき1つだけ

export function bye(name){
    console.log(`さようなら、${name}さん`);
}