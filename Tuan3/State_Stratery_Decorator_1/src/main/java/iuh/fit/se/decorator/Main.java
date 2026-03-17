package iuh.fit.se.decorator;

public class Main {
    public static void main(String[] args) {

        Order order = new BaseOrder();
        order.process();

        System.out.println("Thêm tính năng giao hàng:");
        order = new GiaoHangDecorator(order);
        order.process();

        System.out.println("Thêm tính năng đóng gói");
        order = new DongGoiDecorator(order);
        order.process();
    }
}
