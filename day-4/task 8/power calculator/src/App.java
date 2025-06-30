public class App {
    public static int myPower(int base, int exponent) {
        int result = 1;
        for (int i = 1; i <= exponent; i++) {
            result *= base;
        }
        return result;
    }
    public static void main(String[] args) throws Exception {
        int customPower = myPower(2, 4);
        double mathPower = Math.pow(2, 4);

        System.out.println("myPower(2, 4) = " + customPower);
        System.out.println("Math.pow(2, 4) = " + mathPower);
    }
}
