package src.app;

import src.dao.StudentDAO;

public class MainApp {

    public static void main(String[] args) {

        // INSERT
        StudentDAO.insertStudent(1, "Ravi", 85);
        StudentDAO.insertStudent(2, "Anu", 92);

        System.out.println("\nAll Students:");
        StudentDAO.showStudents();

        // UPDATE
        StudentDAO.updateMarks(1, 90);

        System.out.println("\nAfter Update:");
        StudentDAO.showStudents();

        // DELETE
        StudentDAO.deleteStudent(2);

        System.out.println("\nAfter Delete:");
        StudentDAO.showStudents();
    }
}
