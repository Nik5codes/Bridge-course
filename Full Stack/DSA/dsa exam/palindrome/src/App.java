import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {

        // Scanner sc = new Scanner(System.in);
        // int [] arr = new int[5];
        // System.out.println("Enter 5 integers:");
        // for (int i = 0; i < arr.length; i++) {
        //     arr[i] = sc.nextInt();
        // }
        // int [] reverse = new int [arr.length];
        
        int num = 123454321;
        int reverse = 0;
        while (num != 0) {
            int digit = num % 10;
            reverse = reverse * 10 + digit;
            num /= 10;
        }
        System.out.println(" ");
        System.out.println(reverse);
        if (num == reverse)
        {
            System.out.println("given number is a palindrome");
        }
        else 
        {
            System.out.println("not a palindrome");
        }
    }
}
