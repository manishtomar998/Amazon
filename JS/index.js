let login = (event) => {
    console.log(location);
    event.preventDefault();
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;
    fetch("http://localhost:3000/users").then(response => {
        response.text().then(res => {
            checkUser(JSON.parse(res), loginEmail, loginPassword);
        })
    })
}

let checkUser = (res, loginEmail, loginPassword) => {
    let user = res.filter(data => data.email === loginEmail);
    if (user.length==0) {
        alert("user not found");
    } else {
        if(user[0].password!==loginPassword){
            alert("wrong password");
        } else {
            location.replace("./Pages/home.html");
        }
    }
}
