let productLoad = () => {
    fetch("http://localhost:3000/products").then(response => {
        response.text().then(res => {
            let result = JSON.parse(res);
            createProducts(result);
        })
    })
}
let createProducts = (result) => {
    for (let i = 0; i < result.length; i++) {
        let productDiv = document.createElement("div");
        let productImage = document.createElement("img");
        let productPrice = document.createElement("p");
        let productDes = document.createElement("p");
        let productBtn = document.createElement("button");
        productBtn.onclick = function () {
            addToCart(result[i])
        }
        productImage.src = result[i].image;
        productImage.alt = "Tea";
        productPrice.innerText = result[i].price;
        productDes.innerText = result[i].description;
        productBtn.innerText = "Add to cart";
        productDiv.appendChild(productImage);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDes);
        productDiv.appendChild(productBtn);
        document.getElementById("home").appendChild(productDiv);

    }
}
let addToCart = (item) => {
    let data = {
        method: "post",
        body: JSON.stringify(item),
        headers: {
            "content-type": "application/json"
        }
    }
    fetch("http://localhost:3000/cart", data);
}
