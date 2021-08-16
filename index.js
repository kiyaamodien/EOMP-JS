fetch("https://boiling-savannah-92766.herokuapp.com/all-products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let products = data.data;
    let container = document.querySelector("#products-container");
    container.innerHTML = "";
    products.forEach((product) => {
      container.innerHTML += `
        <div class="g-btn">
          <p class="">${product[1]}</p>
          <p class="">${product[2]}</p>
          <p class="price">${product[3]}</p>
          <p class="">${product[4]}</p>
        </div>
        `;
    });
    // renderProducts(data);
  });

function getParentWithKey(element) {
  let parent = element.parentElement;

  while (parent && !parent.dataset.key) {
    parent = parent.parentElement;
  }

  return parent;
}

$(".add-to-cart").on("click", (e) => {
  const parent = getParentWithKey(e.currentTarget);

  const key = parseInt(parent.dataset.key, 10);
  store.trigger("ITEM_ADDED", { item: key });
});

function renderProducts(products) {
  let productContainer = document.querySelector("#products-container");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" class="product-image">
                <div class="product-content">
                    <h4 class="product_name">${product_name}</h4>
                    <p class="product_type">${product_type}</p>
                    <p class="price">R${price}</p>
                    <p class="product_quantity">${product_quantity}</p>
                </div>
            </div>
        `;
  });
}

function addToCart(id) {
  let product = products.find((item) => {
    return item.id == id;
  });
  console.log(product);
  cart.push(product);
  console.log("Your Items are: ", cart);
}

function searchForProducts() {
  let searchTerm = document.querySelector("#searchTerm").nodeValue;
  console.log(searchTerm);

  let searchedProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  console.log(searchedProducts);

  if (searchedProducts.length == 0) {
    documnent.querySelector("#products-container").innerHTML =
      "<h2>Sorry, no results found.</h2>";
  } else {
    renderProducts(searchProducts);
  }
}
