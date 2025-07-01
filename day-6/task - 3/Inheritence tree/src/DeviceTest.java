class ElectronicDevice {
    String brand;
    boolean power;

    public ElectronicDevice(String brand) {
        this.brand = brand;
        this.power = false;
    }

    public void turnOn() {
        power = true;
        System.out.println(brand + " is now ON");
    }
}

class Television extends ElectronicDevice {
    int screenSize;

    public Television(String brand, int screenSize) {
        super(brand);
        this.screenSize = screenSize;
    }

    public void changeChannel() {
        System.out.println("Changing channel on " + brand + " TV");
    }
}

class Laptop extends ElectronicDevice {
    int batteryLife;

    public Laptop(String brand, int batteryLife) {
        super(brand);
        this.batteryLife = batteryLife;
    }

    public void compileCode() {
        System.out.println(brand + " is compiling code");
    }
}

class Smartphone extends ElectronicDevice {
    int simCount;

    public Smartphone(String brand, int simCount) {
        super(brand);
        this.simCount = simCount;
    }

    public void takePhoto() {
        System.out.println(brand + " took a photo");
    }
}

public class DeviceTest {
    public static void main(String[] args) {
        Television tv = new Television("Sony", 55);
        Laptop laptop = new Laptop("Dell", 8);
        Smartphone phone = new Smartphone("Samsung", 2);

        tv.turnOn();
        tv.changeChannel();

        laptop.turnOn();
        laptop.compileCode();

        phone.turnOn();
        phone.takePhoto();
    }
}
