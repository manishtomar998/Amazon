let register = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let result = passcheck(password, confirmPassword);
    let data = {
        name: name,
        email: email,
        password: password
    }
    if (result) {
        let users = fetchApi("http://localhost:3000/users", data, "post");
        console.log(users);
    }
    else return false


}
let passcheck = (password, confirmPassword) => {
    if (password === confirmPassword) {
        return true
    }
    else {
        return false
    }
}
let fetchApi = async (url, body, method) => {
    let data = {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    }
    await fetch(url, data).then(response => {
        response.text().then(res => {
            return res;
        })
    })
}