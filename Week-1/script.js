function registerUser() {
  // Get username and password from input fields
  var username = ruser.value;
  var password = rpass.value;

  // Check if username is empty
  if (username === "") {
    alert("Please enter username!");
    return;
  }

  // Check if password is empty
  if (password === "") {
    alert("Please enter password!");
    return;
  }

  // Check if password is at least 4 characters
  if (password.length < 4) {
    alert("Password must be at least 4 characters!");
    return;
  }

  // Check if user already exists
  if (localStorage.getItem("user") === username) {
    alert("User already exists! Try a different name.");
    return;
  }

  // Save username and password to localStorage
  localStorage.setItem("user", username);
  localStorage.setItem("pass", password);

  alert("Registration successful!");
  location.href = "index.html";
}

function loginUser() {
  // Get username and password from input fields
  var username = luser.value;
  var password = lpass.value;

  // Check if username is empty
  if (username === "") {
    alert("Please enter username!");
    return;
  }

  // Check if password is empty
  if (password === "") {
    alert("Please enter password!");
    return;
  }

  // Get stored username and password from localStorage
  var correctUser = localStorage.getItem("user");
  var correctPass = localStorage.getItem("pass");

  // Check if username matches
  if (username !== correctUser) {
    alert("Invalid username!");
    return;
  }

  // Check if password matches
  if (password !== correctPass) {
    alert("Invalid password!");
    return;
  }

  // If all checks pass, login successful
  alert("Login Success!");
  location.href = "catalog.html";
}

// Product list
var products = [
  {
    name: "Shoes",
    price: 999,
    img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  },
  {
    name: "Bag",
    price: 499,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDsY1b1y3fo7fPJX-uXb35VhpA41VwUC4pw&s",
  },
  {
    name: "Watch",
    price: 1299,
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
  {
    name: "T-Shirt",
    price: 299,
    img: "https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg",
  },
  {
    name: "Sunglasses",
    price: 699,
    img: "https://images.pexels.com/photos/249210/pexels-photo-249210.jpeg",
  },
  {
    name: "Headphones",
    price: 899,
    img: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg",
  },
  {
    name: "Water Bottle",
    price: 199,
    img: "https://media.istockphoto.com/id/2183430912/photo/stainless-steel-thermos-bottles-with-lids.jpg",
  },
  {
    name: "Wallet",
    price: 399,
    img: "https://images.pexels.com/photos/910122/pexels-photo-910122.jpeg",
  },
];

function loadCatalog() {
  // Display all products on catalog page
  showCount();
  
  var html = "";
  
  // Loop through each product
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    html += "<div class='card'>";
    html += "<img src='" + product.img + "' class='product-image' alt='" + product.name + "'>";
    html += "<h3>" + product.name + "</h3>";
    html += "<p class='price'>₹" + product.price.toLocaleString('en-IN') + "</p>";
    html += "<button onclick='add(" + i + ")'>Add to Cart</button>";
    html += "</div>";
  }
  
  document.getElementById("items").innerHTML = html;
}
function add(i) {
  cart.push(products[i]);
  saveCart();
  showCount();
}
// Get cart from localStorage (empty array if no cart exists)
var cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count display
function showCount() {
  document.getElementById("count").innerText = cart.length;
}

// Add product to cart
function add(index) {
  cart.push(products[index]);
  saveCart();
  showCount();
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  loadCart();
}

// Display cart items on page
function loadCart() {
  showCount();

  var cartDiv = document.getElementById("cartItems");
  var html = "";

  // Loop through each item in cart
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    html += "<div class='cart-item'>";
    html += "<span class='item-name'>" + item.name + "</span>";
    html += "<span class='item-price'>₹" + item.price.toLocaleString('en-IN') + "</span>";
    html += "<button onclick='removeItem(" + i + ")'>Remove</button>";
    html += "</div>";
  }

  cartDiv.innerHTML = html;
}

function checkout() {
  alert("Checked out " + cart.length + " items!");

  cart = [];
  saveCart();
  loadCart();
}