package controller;

import dao.UserDAO;
import model.User;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String email = request.getParameter("email");
		String password = request.getParameter("password");

		UserDAO dao = new UserDAO();
		User user = dao.login(email, password);

		if (user != null) {

			HttpSession session = request.getSession();
			session.setAttribute("user", user);

			response.sendRedirect("products"); // mapped servlet

		} else {
			
			    response.sendRedirect("login.jsp?error=1");
			

		}
	}
}
