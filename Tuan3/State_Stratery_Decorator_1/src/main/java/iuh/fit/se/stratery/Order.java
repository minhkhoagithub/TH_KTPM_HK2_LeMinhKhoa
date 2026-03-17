package iuh.fit.se.stratery;

public class Order {
    private ProcessOrder processOrder;

    public void setProcessOrder(ProcessOrder processOrder) {
        this.processOrder = processOrder;
    }

    public void  ProcessOrder() {
        if (processOrder != null) {
            processOrder.process();
        } else {
            System.out.println("Không có xử lý đơn hàng.");
        }
    }
}
