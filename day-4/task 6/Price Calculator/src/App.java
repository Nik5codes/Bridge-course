public class App {
    public static double calculateDiscount(double originalPrice, double discountPercentage) {
        return originalPrice - (originalPrice * discountPercentage / 100);
    }

    public static double calculateTax(double amount, double taxRate) {
        return amount * taxRate / 100;
    }

    public static double calculateFinalPrice(double itemPrice, double discountPerc, double taxRate) {
        double discountedPrice = calculateDiscount(itemPrice, discountPerc);
        double tax = calculateTax(discountedPrice, taxRate);
        return discountedPrice + tax;
    }
    public static void main(String[] args) throws Exception {
        double finalAmount = calculateFinalPrice(1000.0, 10.0, 18.0);
        System.out.println("Final price after discount and tax: " + finalAmount);
    }
}
