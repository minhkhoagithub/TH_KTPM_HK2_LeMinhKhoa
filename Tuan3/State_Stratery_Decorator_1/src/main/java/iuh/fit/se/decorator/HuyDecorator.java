package iuh.fit.se.decorator;

public class HuyDecorator extends OrderDecorator {
    public HuyDecorator(Order decoratedOrder) {
        super(decoratedOrder);
    }

    @Override
    public void process() {
        super.process();
        huy();
    }

    private void huy() {
        System.out.println("Đơn hàng đã hủy.");
    }
}
