package dao;

import util.DBConnection;
import model.Product;

import java.sql.*;
import java.util.*;

public class ProductDAO {

	public List<Product> getAllProducts() {

		List<Product> list = new ArrayList<>();

		try {
			Connection con = DBConnection.getConnection();

			String sql = "SELECT * FROM products";

			PreparedStatement ps = con.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();

			while (rs.next()) {

				Product p = new Product();

				p.setId(rs.getInt("id"));
				p.setName(rs.getString("name"));
				p.setPrice(rs.getDouble("price"));

				list.add(p);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return list;
	}
}
