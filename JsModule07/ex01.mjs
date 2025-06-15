const res = await fetch("https://jsonplaceholder.typicode.com/users");
//fetchはhttpリクエストを送れる。
//デフォルトではgetメソッドを使うので注意
console.log("resの中身は");
console.log(res);

const data = await res.json();//bodyをjsonとして読み込む関数
console.log("to json");
console.log(data);

//res.json() にawaitをつけないままconsole.logしたらpendingが出力された
//fetchはhttpリクエストを送れるけどhttpsだったり使用するメソッドがpostの時とかはどうする