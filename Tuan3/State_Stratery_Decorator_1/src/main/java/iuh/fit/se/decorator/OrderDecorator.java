package iuh.fit.se.decorator;

public abstract class OrderDecorator implements Order {
    protected Order order;

    public OrderDecorator(Order decoratedOrder) {
        this.order = decoratedOrder;
    }

    @Override
    public void process() {
        order.process();
    }

}
