function wait(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("waited!");
        },ms);
    });
}

wait(1000).then(msg=>console.log(msg));

/*
メモ
状態として、下記の三つがある。
* 待機 (pending): 初期状態。成功も失敗もしていません。
* 履行 (fulfilled): 処理が成功して完了したことを意味します。
* 拒否 (rejected): 処理が失敗したことを意味します。

まず、promiseに渡す引数は自己定義の関数が一つで、 
その関数にはresolveとrejectの二つの関数を渡す必要がある。
なぜなら、その関数の内部で処理が終わったのか、成功したか失敗したかを
promiseの内部状態（おそらくメンバ）を返ることで判断する必要があるから。
resolveを呼ぶとpromiseの内部にあるresultにresolveの引数として渡したものが
Promiseの内部にある [[PromiseResult]] に値が保管され、
promiseの内部状態がfulfilledに変わる。


.then()
.then() は Promise オブジェクトのメンバ関数で、Promise の状態が fulfilled（成功）になったときに、引数として渡した関数を 実行する
この時引数として渡した関数には引数を渡すことができて、その中身、valueはPromiseResultである。
*/