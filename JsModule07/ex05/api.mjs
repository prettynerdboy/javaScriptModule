export async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

export async function getUsersById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
}