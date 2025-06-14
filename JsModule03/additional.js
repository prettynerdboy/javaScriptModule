function wait(ms){
    return new Promise(resolve =>{
        setTimeout(resolve,ms);
    });
}

function getUsers(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {id: 1, name: "Anakin"},
                {id: 2, name: "Leia"},
                {id: 3, name: "Han"},
            ]);
        },3000);
    });
}
//キーとバリューのその場定義のオブジェクトを返せる。なんでもありやな

function getPosts(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random() > 0.3)
                resolve(`User ${userId}を投稿`);
            else
                reject(`User ${userId}の投稿に失敗`);
        },800);
    });
}

async function main() {
    try{
        console.log("ユーザー一覧取中")
        const users = await getUsers();
        console.log("ユーザー一覧取得成功")
        
        for(const user of users){
            console.log(`user : ${user.name}`);
            await wait(1000);

            try{
                const post = await getPosts(user.id);
                console.log(`投稿 :${post}`);
            }catch(err){
                console.error(`error: ${err}`);
            }
            await wait(1000);
        }
        console.log("全体の処理が終了しました。");
    }catch(err){
        console.error("critical error:",err);
    }
}

main();