package iuh.fit.se.decorator;

public class BaseOrder implements Order {
    @Override
    public void process() {
        System.out.println("Đơn hàng đang được xử lý.");
    }
}
