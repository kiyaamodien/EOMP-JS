fetch("https:/https://boiling-savannah-92766.herokuapp.com/products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    takeaways(data);
  });

function takeaways(product) {
  let product_container = document.querySelector(".product-container");
  product_container.innerHTML = "";
  product.data.forEach((car) => {
    product_container.innerHTML += `
    <div class = "vehicle">
        <img src="${product.image_url}" class="vehicle-image size1">
        <img src="${product.logo}" class="vehicle-logo size2">
        <h4 class="product_name"> ${product.name}</h4>
        <p class="product_type"> ${product.type}</p>
        <p class="price">R${price} </p>
        <p class="product_quamtity">${product.quantity}</p>

    </div>
    `;
  });
}
