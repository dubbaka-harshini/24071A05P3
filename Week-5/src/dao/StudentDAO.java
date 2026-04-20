package src.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import src.db.DBConnection;

public class StudentDAO {

    // ✅ INSERT
    public static void insertStudent(int id, String name, int marks) {
        try (Connection con = DBConnection.getConnection()) {

            String sql = "INSERT INTO students VALUES (?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, marks);

            ps.executeUpdate();
            System.out.println("Inserted successfully");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ READ
    public static void showStudents() {
        try (Connection con = DBConnection.getConnection()) {

            String sql = "SELECT * FROM students";
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                System.out.println(
                        rs.getInt("id") + " " +
                        rs.getString("name") + " " +
                        rs.getInt("marks")
                );
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ UPDATE
    public static void updateMarks(int id, int marks) {
        try (Connection con = DBConnection.getConnection()) {

            String sql = "UPDATE students SET marks=? WHERE id=?";
            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, marks);
            ps.setInt(2, id);

            ps.executeUpdate();
            System.out.println("Updated successfully");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ✅ DELETE
    public static void deleteStudent(int id) {
        try (Connection con = DBConnection.getConnection()) {

            String sql = "DELETE FROM students WHERE id=?";
            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, id);
            ps.executeUpdate();

            System.out.println("Deleted successfully");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
