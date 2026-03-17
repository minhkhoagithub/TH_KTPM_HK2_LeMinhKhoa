package iuh.fit.se.stratery;

public class HuyStrategy implements ProcessOrder {
    @Override
    public void process() {
        System.out.println("Đơn hàng đã bị hủy.");
    }
}
