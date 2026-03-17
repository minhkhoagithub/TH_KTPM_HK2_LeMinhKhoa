package iuh.fit.se.decorator;

public class VanChuyenDecorator extends OrderDecorator {
    public VanChuyenDecorator(Order decoratedOrder) {
        super(decoratedOrder);
    }

    @Override
    public void process() {
        super.process();
        vanchuyen();
    }

    private void vanchuyen() {
        System.out.println("Đơn hàng đang được vận chuyển.");
    }
}
