package iuh.fit.se;

public class Main {
    public static void main(String[] args) {
    DBConnection dbConnection = DBConnection.getInstance();
        dbConnection.connect();
        DBConnection dbConnection2 = DBConnection.getInstance();
        dbConnection2.connect();

    }
}