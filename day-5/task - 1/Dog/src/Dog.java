public class Dog {
    static String species = "Canis familiaris";
    static int numLegs = 4;

    String name;
    String breed;
    int age;

    public void bark() {
        System.out.println("Woof!");
    }

    public static void main(String[] args) {
        Dog d1 = new Dog();
        d1.name = "Buddy";
        d1.breed = "Labrador";
        d1.age = 3;

        d1.bark();
    }
}
