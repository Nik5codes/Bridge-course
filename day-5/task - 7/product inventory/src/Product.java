public class Product {
    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price, int quantity) {
        this.name = name;
        setPrice(price);
        setQuantity(quantity);
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        }
    }

    public void setQuantity(int quantity) {
        if (quantity >= 0) {
            this.quantity = quantity;
        }
    }

    public double getTotalValue() {
        return price * quantity;
    }

    public static void main(String[] args) {
        Product p1 = new Product("Laptop", 50000, 5);

        System.out.println("Product: " + p1.getName());
        System.out.println("Price: " + p1.getPrice());
        System.out.println("Quantity: " + p1.getQuantity());
        System.out.println("Total Value: " + p1.getTotalValue());

        p1.setPrice(-1000);   // Should not update
        p1.setQuantity(-2);   // Should not update

        System.out.println("After invalid updates:");
        System.out.println("Price: " + p1.getPrice());
        System.out.println("Quantity: " + p1.getQuantity());
    }
}
