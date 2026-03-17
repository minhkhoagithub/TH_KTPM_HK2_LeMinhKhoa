package iuh.fit.se.state;

public interface State {
    void handle(Order order);
}
