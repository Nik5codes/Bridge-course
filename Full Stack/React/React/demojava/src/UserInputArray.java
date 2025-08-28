import java.util.Scanner;

public class UserInputArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ask for the number of elements
        System.out.print("Enter the number of elements: ");
        int size = scanner.nextInt();

        // Create the array
        int[] numbers = new int[size];

        // Input elements
        System.out.println("Enter " + size + " integers:");
        for (int i = 0; i < size; i++) {
            System.out.print("Element " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
        }

        





        // Print the array
        System.out.println("You entered:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        scanner.close();
    }
}
