import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int num;
        int sum = 0;

        System.out.print("Enter a number (0 to stop): ");
        num = sc.nextInt();

        while (num != 0) {
            sum += num;
            System.out.print("Enter a number (0 to stop): ");
            num = sc.nextInt();
        }

        System.out.println("Total sum: " + sum);
    }
}
