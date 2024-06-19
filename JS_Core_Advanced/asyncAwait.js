async function fetchUserData  (id) {
    const data = await fetch(`https://dummyjson.com/users/${id}`)
    const info = await data.json()
    return info
}

console.log(fetchUserData(1).then(info => console.log(info)))