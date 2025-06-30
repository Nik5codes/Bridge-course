public class App {
    public static void main(String[] args) throws Exception {
        greetUser("Alice");
        greetUser("Bob");
        greetUser("Charlie");
    }
        public static void greetUser(String name) {
        System.out.println("Hello, " + name);
    }
}
