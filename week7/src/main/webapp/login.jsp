<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<form class="form-box"
      action="<%=request.getContextPath()%>/login"
      method="post">

<h2>Login</h2>

<!-- 🔴 ERROR BOX -->
<%
if(request.getParameter("error") != null){
%>
<div style="
background:#e74c3c;
color:white;
padding:12px;
margin-bottom:15px;
border-radius:6px;
text-align:center;
font-weight:600;">
Invalid Email or Password!
</div>
<% } %>


<!-- 🟢 SUCCESS AFTER REGISTRATION -->
<%
if(request.getParameter("registered") != null){
%>
<div style="
background:#2ecc71;
color:white;
padding:12px;
margin-bottom:15px;
border-radius:6px;
text-align:center;
font-weight:600;">
Registration successful! Please login.
</div>
<% } %>


<!-- 🟢 LOGOUT -->
<%
if(request.getParameter("logout") != null){
%>
<div style="
background:#3498db;
color:white;
padding:12px;
margin-bottom:15px;
border-radius:6px;
text-align:center;
font-weight:600;">
Logged out successfully!
</div>
<% } %>


<input type="email"
       name="email"
       placeholder="Enter Email"
       required>

<input type="password"
       name="password"
       placeholder="Enter Password"
       required>

<button type="submit">Login</button>

<p>
Don't have an account?
<a href="register.jsp">Register</a>
</p>

</form>
</div>


<!-- ⭐ REAL POPUP ALERTS -->
<%
if(request.getParameter("error") != null){
%>
<script>
alert("Invalid Email or Password!");
</script>
<% } %>

<%
if(request.getParameter("registered") != null){
%>
<script>
alert("Registration Successful! Please login.");
</script>
<% } %>

<%
if(request.getParameter("logout") != null){
%>
<script>
alert("Logged out successfully!");
</script>
<% } %>

</body>
</html>
