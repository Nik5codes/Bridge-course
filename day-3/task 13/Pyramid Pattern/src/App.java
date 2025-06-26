import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
Scanner sc = new Scanner(System.in);
        System.out.print("Enter height of the pyramid: ");
        int height = sc.nextInt();

        for (int i = 1; i <= height; i++) {
            for (int space = 1; space <= height - i; space++) {
                System.out.print(" ");
            }
            for (int star = 1; star <= 2 * i - 1; star++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
