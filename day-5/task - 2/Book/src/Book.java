public class Book {
    String title;
    String author;
    int numPages;
    boolean isOpen;

    public void openBook() {
        isOpen = true;
    }

    public void closeBook() {
        isOpen = false;
    }

    public static void main(String[] args) {
        Book b1 = new Book();
        b1.title = "The Java Handbook";
        b1.author = "John Doe";
        b1.numPages = 300;

        b1.openBook();
        System.out.println("Book is open: " + b1.isOpen);

        b1.closeBook();
        System.out.println("Book is open: " + b1.isOpen);
        
    }
}
