package iuh.fit.se.stratery;

public class DaGiaoStrategy implements ProcessOrder {
    @Override
    public void process() {
        System.out.println("Đơn hàng đã được giao đến khách hàng.");
    }
}
