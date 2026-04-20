<%@ page import="java.util.*, model.CartItem" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Your Cart</title>

<style>

body{
    margin:0;
    font-family:'Segoe UI',sans-serif;
    background:#f1f3f6;
}

/* HEADER */
.header{
    background:#131921;
    color:white;
    padding:18px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.header a{
    color:white;
    text-decoration:none;
    margin-left:25px;
    font-weight:500;
}

/* CART CONTAINER */
.cart-container{
    width:80%;
    margin:40px auto;
}

/* CARD */
.cart-card{
    background:white;
    padding:25px;
    border-radius:10px;
    box-shadow:0 4px 12px rgba(0,0,0,0.08);
}

/* TABLE */
table{
    width:100%;
    border-collapse:collapse;
}

th{
    text-align:left;
    padding:12px;
    border-bottom:2px solid #ddd;
}

td{
    padding:14px 10px;
    border-bottom:1px solid #eee;
}

/* PRICE */
.price{
    color:#2ecc71;
    font-weight:bold;
}

/* BUTTONS */
.btn{
    padding:8px 14px;
    border:none;
    border-radius:6px;
    cursor:pointer;
    font-weight:600;
}

.remove{
    background:#e74c3c;
    color:white;
}

.shop{
    background:#3498db;
    color:white;
}

.checkout{
    background:#f39c12;
    color:white;
    width:100%;
    margin-top:20px;
    padding:12px;
    font-size:16px;
}

/* TOTAL BOX */
.total-box{
    text-align:right;
    margin-top:20px;
    font-size:20px;
}

/* EMPTY CART */
.empty{
    text-align:center;
    margin-top:100px;
}

.empty button{
    padding:12px 20px;
    font-size:16px;
}

</style>
</head>

<body>

<!-- HEADER -->
<div class="header">
    <h2>🛒 Shopping Cart</h2>

    <div>
        <a href="catalog.jsp">Products</a>
        <a href="<%=request.getContextPath()%>/logout">Logout</a>
    </div>
</div>


<%
List<CartItem> cart =
(List<CartItem>)session.getAttribute("cart");

if(cart != null && !cart.isEmpty()){

double total = 0;
%>

<div class="cart-container">

<div class="cart-card">

<table>

<tr>
<th>Product</th>
<th>Price</th>
<th>Action</th>
</tr>

<%
for(CartItem item : cart){

total += item.getPrice();
%>

<tr>

<td>
<b><%=item.getName()%></b><br>
ID: <%=item.getId()%>
</td>

<td class="price">

 <%=item.getPrice()%>
</td>

<td>

<form action="remove-from-cart" method="post">
<input type="hidden" name="id"
       value="<%=item.getId()%>">

<button class="btn remove">
Remove
</button>

</form>

</td>

</tr>

<% } %>

</table>

<div class="total-box">
Total: <span class="price">
 <%=total%></span>
</div>

<button class="checkout">
Proceed to Checkout
</button>

</div>
</div>

<%
}else{
%>

<div class="empty">

<h1>Your Cart is Empty 🛒</h1>
<p>Add some products to see them here.</p>

<a href="catalog.jsp">
<button class="shop">
Start Shopping
</button>
</a>

</div>

<% } %>

</body>
</html>
