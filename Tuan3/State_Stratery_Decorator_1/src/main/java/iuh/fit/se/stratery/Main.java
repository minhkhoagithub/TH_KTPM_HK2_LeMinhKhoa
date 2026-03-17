package iuh.fit.se.stratery;

public class Main {
    public static void main(String[] args) {
        Order order = new Order();
        order.setProcessOrder(new MoiTaoStrategy());
        order.ProcessOrder();
    }
}
