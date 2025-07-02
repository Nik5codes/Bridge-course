public class LCMCalculator {

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }

    public static void main(String[] args) {
        System.out.println("LCM of 20 and 30: " + lcm(20, 30));
        System.out.println("LCM of 81 and 27: " + lcm(81, 27));
        System.out.println("LCM of 13 and 7: " + lcm(13, 7));
    }
}
