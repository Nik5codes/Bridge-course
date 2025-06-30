public class App {
        public static int calculateSquare(int number) {
        return number * number;
    }
    public static void main(String[] args) throws Exception {
        int result = calculateSquare(4);
        System.out.println("Square of 4 is: " + result);

        System.out.println("Square of 7 is: " + calculateSquare(7));
    }
}
