package controller;

import model.CartItem;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/cart")
public class CartServlet extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		CartItem item = new CartItem();

		item.setId(Integer.parseInt(request.getParameter("id")));
		item.setName(request.getParameter("name"));
		item.setPrice(Double.parseDouble(request.getParameter("price")));

		HttpSession session = request.getSession();

		List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

		// ✅ If cart does not exist → create one
		if (cart == null) {
			cart = new ArrayList<>();
		}

		cart.add(item);

		session.setAttribute("cart", cart);

		// ⭐ Always use context path
		response.sendRedirect(request.getContextPath() + "/cart.jsp");
	}
}
