let cartLoad = () => {
    fetch("http://localhost:3000/cart").then(response => {
        response.text().then(res => {
            let result = JSON.parse(res);
            createCart(result);
        })
    })
}
let createCart = (result) => {
    for (let i = 0; i < result.length; i++) {
        let productDiv = document.createElement("div");
        let productImage = document.createElement("img");
        let productPrice = document.createElement("p");
        let productDes = document.createElement("p");
        productImage.src = result[i].image;
        productImage.alt = "Tea";
        productPrice.innerText = result[i].price;
        productDes.innerText = result[i].description;
        productDiv.appendChild(productImage);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDes);
        document.getElementById("cart").appendChild(productDiv);

    }
}
let buyAll = () => {
    fetch("http://localhost:3000/cart").then(response => {
        response.text().then(res => {
            let result = JSON.parse(res);
            let data = {
                method: "delete",
                headers: {
                    "content-type": "application/json"
                }
            }
            for (let i = 0; i < result.length; i++) {
fetch(`http://localhost:3000/cart/${result[i].id}`,data)
            }
        })
    }
    )
}

