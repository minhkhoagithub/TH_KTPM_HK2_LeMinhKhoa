package iuh.fit.se.factory;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("===== CHON PHUONG THUC THANH TOAN =====");
        System.out.println("1. Credit Card");
        System.out.println("2. PayPal");
        System.out.println("3. Momo");
        System.out.print("Nhap lua chon: ");

        int luaChon = sc.nextInt();

        Payment payment = null;

        switch(luaChon){
            case 1:
                payment = PaymentFactory.createPayment("Credit");
                break;
            case 2:
                payment = PaymentFactory.createPayment("Paypal");
                break;
            case 3:
                payment = PaymentFactory.createPayment("Momo");
                break;
            default:
                System.out.println("Lua chon khong hop le");
                return;
        }

        payment.pay();
    }
}
