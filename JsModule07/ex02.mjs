const res = await fetch("https://jsonplaceholder.typicode.com/users");
const jsonData = await res.json();

const names = jsonData.map(user => user.name);
names.forEach(name => {
    console.log(name);
});