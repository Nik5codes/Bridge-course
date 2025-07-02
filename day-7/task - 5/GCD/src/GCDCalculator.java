public class GCDCalculator {

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println("GCD of 20 and 30: " + gcd(20, 30));
        System.out.println("GCD of 81 and 27: " + gcd(81, 27));
        System.out.println("GCD of 13 and 7: " + gcd(13, 7));
    }
}