import java.util.Scanner;

public class WordSearch {
    public static void main(String[] args) {
        String[] words = {"apple", "banana", "grape", "mango", "orange"};
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a word to search: ");
        String input = scanner.nextLine();

        boolean found = false;
        for (String word : words) {
            if (word.equalsIgnoreCase(input)) {
                found = true;
                break;
            }
        }

        if (found) {
            System.out.println("Word found in the list.");
        } else {
            System.out.println("Word not found in the list.");
        }

        scanner.close();
    }
}
