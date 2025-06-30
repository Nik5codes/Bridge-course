public class Book {
    String title;
    String author;
    boolean isOpen;

    public Book(String title, String author, boolean isOpen) {
        this.title = title;
        this.author = author;
        this.isOpen = isOpen;
    }

    public void displayStatus() {
        String status = isOpen ? "Open" : "Closed";
        System.out.println(title + " by " + author + " is " + status);
    }

    public static void main(String[] args) {
        Book b1 = new Book("Java Basics", "John Smith", true);
        Book b2 = new Book("Data Structures", "Alice Brown", false);

        b1.displayStatus();
        b2.displayStatus();
    }
}
