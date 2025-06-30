public class App {
    public static void customGreet(String name, String greeting) {
        System.out.println(greeting + ", " + name);
    }

    public static void customGreet(String name) {
        customGreet(name, "Hello");
    }

    public static void customGreet() {
        customGreet("Guest", "Welcome");
    }
    public static void main(String[] args) throws Exception {
        customGreet("Alice", "Hi");
        customGreet("Bob");
        customGreet();
    }
}
