package iuh.fit.se.state;

public class MoiTaoState implements State {
    @Override
    public void handle(Order order) {
        System.out.println("Đơn hàng mới được tạo.");
    }
}
