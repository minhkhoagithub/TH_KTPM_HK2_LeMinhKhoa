package iuh.fit.se.stratery;

public class MoiTaoStrategy implements ProcessOrder {
    @Override
    public void process() {
        System.out.println("Đơn hàng đang ở trạng thái Mới Tạo.");
    }
}
