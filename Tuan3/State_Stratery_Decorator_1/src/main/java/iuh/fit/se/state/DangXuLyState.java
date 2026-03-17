package iuh.fit.se.state;

public class DangXuLyState implements State {
    @Override
    public void handle(Order order) {
        System.out.println("Đơn hàng đang được xử lý.");
        // Logic để xử lý đơn hàng
    }

}
