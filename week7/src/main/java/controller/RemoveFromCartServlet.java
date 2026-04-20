package controller;

import model.CartItem;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.util.List;

@WebServlet("/remove-from-cart")
public class RemoveFromCartServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws IOException {

        int id = Integer.parseInt(
                request.getParameter("id"));

        HttpSession session = request.getSession(false);

        if(session != null){

            List<CartItem> cart =
                    (List<CartItem>) session.getAttribute("cart");

            if(cart != null){

                cart.removeIf(item ->
                        item.getId() == id);
            }
        }

        response.sendRedirect(
                request.getContextPath()+"/cart.jsp"
        );
    }
}
