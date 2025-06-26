import java.util.Random;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
                Scanner sc = new Scanner(System.in);
        Random rand = new Random();

        int numberToGuess = rand.nextInt(10) + 1;
        int guess;

        System.out.print("Guess a number between 1 and 10: ");
        guess = sc.nextInt();

        while (guess != numberToGuess) {
            if (guess < numberToGuess) {
                System.out.println("Too low. Try again.");
            } else {
                System.out.println("Too high. Try again.");
            }

            System.out.print("Guess again: ");
            guess = sc.nextInt();
        }

        System.out.println("Correct! You guessed the number.");
    }
}
