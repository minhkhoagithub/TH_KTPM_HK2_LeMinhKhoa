package iuh.fit.se.factory;

public class PaymentFactory {
    public static Payment createPayment(String type){
        if(type.equalsIgnoreCase("Credit")){
            return new Credit();
        } else if(type.equalsIgnoreCase("Paypal")){
            return new Paypal();
        } else if(type.equalsIgnoreCase("Momo")){
            return new Momo();
        }
        return null;
    }
}
