package iuh.fit.se.decorator;

public class DongGoiDecorator extends OrderDecorator {
    public DongGoiDecorator(Order decoratedOrder) {
        super(decoratedOrder);
    }

    @Override
    public void process() {
        super.process();
        dongGoi();
    }

    private void dongGoi() {
        System.out.println("Đơn hàng đang được đóng gói.");
    }
}
