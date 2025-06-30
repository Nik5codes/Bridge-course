public class Car {
        // Class attribute
    static int numberOfWheels = 4;

    // Instance attributes
    String brand;
    String model;
    int year;
    String color;
    double mileage;

    // Instance methods
    public void startEngine() {
        System.out.println(brand + " engine started.");
    }

    public void drive() {
        System.out.println(brand + " is driving.");
    }

    public void stop() {
        System.out.println(brand + " has stopped.");
    }

    public static void main(String[] args) {
        Car c1 = new Car();
        c1.brand = "Toyota";
        c1.model = "Corolla";
        c1.year = 2020;
        c1.color = "Red";
        c1.mileage = 15000;

        System.out.println("Number of wheels: " + Car.numberOfWheels);
        System.out.println("Car: " + c1.brand + " " + c1.model + ", " + c1.color + ", " + c1.year);

        c1.startEngine();
        c1.drive();
        c1.stop();
    }
}
