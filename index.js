let products = [];
let cart = [];
console.log(cart);

fetch("https://boiling-savannah-92766.herokuapp.com/all-products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let products = data.data;
    renderProducts(products);
  });

function getParentWithKey(element) {
  let parent = element.parentElement;

  while (parent && !parent.dataset.key) {
    parent = parent.parentElement;
  }

  return parent;
}

// $(".add-to-cart").on("click", (e) => {
//   const parent = getParentWithKey(e.currentTarget);

//   const key = parseInt(parent.dataset.key, 10);
//   store.trigger("ITEM_ADDED", { item: key });
// });

function renderProducts(products) {
  let productContainer = document.querySelector("#products-container");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
            <div class="product">
                <div class="product-content">
                    <h4 class="product_name">${product[1]}</h4>
                    <p class="product_type">${product[2]}</p>
                    <p class="price">${product[3]}</p>
                    <p class="product_quantity">${product[4]}</p>
                    <button onclick="addToCart(${product[0]})">Add to Cart</button>
                </div>
            </div>
        `;
  });
}

function addToCart(id) {
  let product = products.find((item) => {
    return item[0] == id;
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

function sortNamesAsc() {
  let sortedproducts = products.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  renderProducts(sortedproducts);
}

function sortNameDesc() {
  let sortedProducts = products.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  sortedProducts.reverse();

  renderProducts(sortedproducts);
}

function sortPriceAsc() {
  let sortedProducts = products.sort((a, b) => a.price - b.price);
  renderProducts(sortedProducts);
}
function toggleCart() {
  document.querySelector("#cart").classList.toggle("active");
}

function renderCart(cartItems) {
  let cartContainer = document.querySelector("#cart");
  cardContainer.innerHTML = "";
  if (cardItems.legth > 0) {
    cardItems.map((cardItem) => {
      cardContainer.innerHTML += `
      <div class="product">
      <div class="product-content">
      <h4 class="product_name">${cardItem.name}</h4>
      <p class="product_type">${carditem.type}</p>
      <p class="price">${price}</p>
      </div>
      </div>
      `;

      cartContainer.innerHTML;
    });
  } else {
    cartContainer.innerHTML = "<h2>No items in cart</h2>";
  }
}
