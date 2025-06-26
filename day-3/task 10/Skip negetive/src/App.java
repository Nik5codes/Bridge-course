import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int sum = 0;

        for (int i = 1; i <= 5; i++) {
            System.out.print("Enter number " + i + ": ");
            int num = sc.nextInt();

            if (num < 0) {
                continue;
            }

            sum += num;
        }

        System.out.println("Sum of non-negative numbers: " + sum);
    }
}
