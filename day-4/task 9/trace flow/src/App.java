public class App {
    public static int B() {
        return 42;
    }

    public static void C(int value) {
        System.out.println("C received: " + value);
    }

    public static void A() {
        int result = B();
        C(result);
    }
    public static void main(String[] args) throws Exception {
        A();
    }
}