<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Shopping Cart</title>

<style>

body{
    margin:0;
    font-family:'Segoe UI',sans-serif;
}

/* NAVBAR */
.navbar{
    background:#131921;
    color:white;
    padding:18px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.navbar a{
    color:white;
    text-decoration:none;
    margin-left:25px;
    font-weight:500;
}

/* HERO SECTION */
.hero{
    height:90vh;
    background:linear-gradient(to right,#4facfe,#00f2fe);
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
}

.hero h1{
    font-size:52px;
    margin-bottom:10px;
}

.hero p{
    font-size:20px;
    margin-bottom:30px;
}

/* BUTTONS */
.btn{
    padding:14px 26px;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-size:16px;
    margin:10px;
}

.login{
    background:#f39c12;
    color:white;
}

.register{
    background:#2ecc71;
    color:white;
}

.shop{
    background:#ffffff;
    color:#333;
    font-weight:bold;
}

</style>
</head>

<body>

<!-- NAVBAR -->
<div class="navbar">

<h2>🛒 ShoppingCart</h2>

<div>
<a href="login.jsp">Login</a>
<a href="register.jsp">Register</a>
</div>

</div>


<!-- HERO -->
<div class="hero">

<div>

<h1>Welcome to ShoppingCart</h1>

<p>
Your one-stop destination for the best products at unbeatable prices.
</p>

<a href="products">
<button class="btn shop">
Start Shopping
</button>
</a>

<br>

<a href="login.jsp">
<button class="btn login">
Login
</button>
</a>

<a href="register.jsp">
<button class="btn register">
Register
</button>
</a>

</div>

</div>

</body>
</html>
