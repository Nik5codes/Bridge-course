public class App {
    static String globalMessage = "I am global!";

    static void displayMessages() {
        String localMessage = "I am local!";
        System.out.println(globalMessage);
    }

    public static void main(String[] args) {
        displayMessages();
        System.out.println(localMessage);
    }
}
