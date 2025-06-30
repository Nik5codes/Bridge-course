public class App {
    public static double addNumbers(double num1, double num2) {
        return num1 + num2;
    }
    public static void main(String[] args) throws Exception {
        double sum = addNumbers(5.5, 4.3);
        System.out.println("Sum is: " + sum);
    }
}
