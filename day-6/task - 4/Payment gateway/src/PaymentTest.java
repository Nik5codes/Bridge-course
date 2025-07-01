abstract class PaymentGateway {
    public abstract void processPayment(double amount);
}

class CreditCardGateway extends PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment of $" + amount);
    }
}

class PayPalGateway extends PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment of $" + amount);
    }
}

public class PaymentTest {
    public static void main(String[] args) {
        PaymentGateway credit = new CreditCardGateway();
        PaymentGateway paypal = new PayPalGateway();

        credit.processPayment(250.0);
        paypal.processPayment(500.0);

        // PaymentGateway pg = new PaymentGateway(); // This line would cause a compile-time error
    }
}
