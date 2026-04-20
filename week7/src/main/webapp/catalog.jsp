<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Catalog</title>

<style>

body{
    margin:0;
    font-family:Arial;
    background:#f4f6f8;
}

/* Header */
.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#222;
    color:white;
    padding:15px 30px;
}

.header a{
    color:white;
    text-decoration:none;
    margin-left:20px;
}

/* Grid Layout */
.container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
    padding:40px;
}

/* Product Card */
.card{
    background:white;
    border-radius:10px;
    padding:20px;
    text-align:center;
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.card h3{
    margin-bottom:10px;
}

.price{
    color:green;
    font-size:20px;
    margin-bottom:15px;
}

button{
    background:#ff9800;
    border:none;
    padding:10px 20px;
    color:white;
    border-radius:5px;
    cursor:pointer;
}

button:hover{
    background:#e68900;
}

</style>
</head>

<body>

<!-- HEADER -->
<div class="header">
    <h2>🛒 Shopping Cart</h2>

    <div>
        <a href="cart.jsp">View Cart</a>
        <a href="<%=request.getContextPath()%>/logout">
            Logout
        </a>
    </div>
</div>

<!-- PRODUCTS -->
<div class="container">

<!-- Product 1 -->
<div class="card">
    <h3>Laptop</h3>
    <p class="price">₹55,000</p>

    <form action="<%=request.getContextPath()%>/cart"
          method="post">

        <input type="hidden" name="id" value="101">
        <input type="hidden" name="name" value="Laptop">
        <input type="hidden" name="price" value="55000">

        <button type="submit">
            Add to Cart
        </button>

    </form>
</div>

<!-- Product 2 -->
<div class="card">
    <h3>Smartphone</h3>
    <p class="price">₹25,000</p>

    <form action="<%=request.getContextPath()%>/cart"
          method="post">

        <input type="hidden" name="id" value="102">
        <input type="hidden" name="name" value="Smartphone">
        <input type="hidden" name="price" value="25000">

        <button type="submit">
            Add to Cart
        </button>

    </form>
</div>

<!-- Product 3 -->
<div class="card">
    <h3>Headphones</h3>
    <p class="price">₹3,000</p>

    <form action="<%=request.getContextPath()%>/cart"
          method="post">

        <input type="hidden" name="id" value="103">
        <input type="hidden" name="name" value="Headphones">
        <input type="hidden" name="price" value="3000">

        <button type="submit">
            Add to Cart
        </button>

    </form>
</div>

<!-- Product 4 -->
<div class="card">
    <h3>Smart Watch</h3>
    <p class="price">₹5,000</p>

    <form action="<%=request.getContextPath()%>/cart"
          method="post">

        <input type="hidden" name="id" value="104">
        <input type="hidden" name="name" value="Smart Watch">
        <input type="hidden" name="price" value="5000">

        <button type="submit">
            Add to Cart
        </button>

    </form>
</div>

</div>

</body>
</html>
