package iuh.fit.se;

public class DBConnection {
    private static DBConnection instance;
    private DBConnection() {
        System.out.println("Kết nối đến cơ sở dữ liệu...");
    }

    public static DBConnection getInstance() {
        if (instance == null) {
            instance = new DBConnection();
        }
        return instance;
    }

    public void connect(){
        System.out.println("Đã kết nối đến cơ sở dữ liệu.");
    }
}
