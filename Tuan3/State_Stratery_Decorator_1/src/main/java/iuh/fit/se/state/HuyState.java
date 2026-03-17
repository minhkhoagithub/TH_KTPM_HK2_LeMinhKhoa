package iuh.fit.se.state;

public class HuyState implements State {
    @Override
    public void handle(Order order) {
        System.out.println("Đơn hàng đã bị hủy.");
    }
}
