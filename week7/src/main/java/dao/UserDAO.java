package dao;

import util.DBConnection;
import model.User;

import java.sql.*;

public class UserDAO {

	public boolean register(User user) {

		try {
			Connection con = DBConnection.getConnection();

			String sql = "INSERT INTO users(name,email,password) VALUES(?,?,?)";

			PreparedStatement ps = con.prepareStatement(sql);

			ps.setString(1, user.getName());
			ps.setString(2, user.getEmail());
			ps.setString(3, user.getPassword());

			return ps.executeUpdate() > 0;

		} catch (Exception e) {
			e.printStackTrace();
		}

		return false;
	}

	public User login(String email, String password) {

		User user = null;

		try {
			Connection con = DBConnection.getConnection();

			String sql = "SELECT * FROM users WHERE email=? AND password=?";

			PreparedStatement ps = con.prepareStatement(sql);

			ps.setString(1, email);
			ps.setString(2, password);

			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				user = new User();
				user.setId(rs.getInt("id"));
				user.setName(rs.getString("name"));
				user.setEmail(rs.getString("email"));
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return user;
	}
}
