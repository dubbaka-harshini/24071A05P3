<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Register</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<form class="form-box"
      action="<%=request.getContextPath()%>/register"
      method="post">

<h2>Create Account</h2>

<!-- 🔴 ERROR POPUP -->
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
Registration Failed! Email may already exist.
</div>
<% } %>

<input type="text"
       name="name"
       placeholder="Username"
       required>

<input type="email"
       name="email"
       placeholder="Email"
       required>

<input type="password"
       name="password"
       placeholder="Password"
       required>

<button type="submit">Register</button>

<p>
Already have an account?
<a href="login.jsp">Login</a>
</p>

</form>
</div>

</body>
</html>
