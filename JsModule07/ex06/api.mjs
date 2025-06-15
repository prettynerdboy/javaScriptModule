export async function getUsersById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!res.ok)
        throw new Error("ユーザーが見つかりません")
    return res.json();
}