const getUser = () => {
    fetch(`http://localhost:3001/users`).then(resp =>  resp.json()).then(users => users)
}