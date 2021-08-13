fetch("https://boiling-savannah-92766.herokuapp.com/show-products");
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderProducts(data)
    })

function renderProducts(products) {
    let productContainer = document.querySelector("#products-container");
    productContainer.innerHTML ="";
    products.forEach(product => {   
        productContainer.innerHTML += `
            <div class="product">
                <img src="${ product.image }" class="product-image">
                <div class="product-content">
                    <h4 class="product_name">${ product_name }</h4>
                    <p class="product_type">${ product_type }</p>
                    <p class="price">R${ price }</p>
                    <p class="product_quantity">${ product_quantity }</p>
                </div>
            </div>
        `
    })

}
