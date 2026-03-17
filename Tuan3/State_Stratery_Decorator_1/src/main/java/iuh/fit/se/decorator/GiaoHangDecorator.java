package iuh.fit.se.decorator;

public class GiaoHangDecorator extends OrderDecorator {
    public GiaoHangDecorator(Order decoratedOrder) {
        super(decoratedOrder);
    }

    @Override
    public void process() {
        super.process();
        giaohang();
    }

    private void giaohang() {
        System.out.println("Đơn hàng đang được giao.");
    }
}
