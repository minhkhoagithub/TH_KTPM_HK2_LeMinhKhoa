package iuh.fit.se.state;

public class Order {
    private State state;

    public Order() {
        this.state = new MoiTaoState();
    }

    public void setState(State state) {
        this.state = state;
    }

    public void process() {
        state.handle(this);
    }
}
