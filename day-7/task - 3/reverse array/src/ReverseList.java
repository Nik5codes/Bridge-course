public class ReverseList {
    public static void main(String[] args) {
        String[] items = {"Apple", "Banana", "Cherry", "Date", "Elderberry"};

        System.out.println("Items in reverse order:");
        for (int i = items.length - 1; i >= 0; i--) {
            System.out.println(items[i]);
        }
    }
}