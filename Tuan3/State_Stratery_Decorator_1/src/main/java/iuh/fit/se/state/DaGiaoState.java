package iuh.fit.se.state;

public class DaGiaoState implements State {
    @Override
    public void handle(Order order) {
        System.out.println("Đơn hàng đã được giao.");
    }
}
