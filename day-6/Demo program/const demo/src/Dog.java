public class Dog {
    String name;
    String breed;
    int age;

    public static void main(String[] args) {
        // Object creation
        Dog d1 = new Dog("Tommy", "Pug", 3);
        
        // Using methods
        d1.bark();
        d1.showDetails();
    }


    // Constructor
    Dog(String name, String breed, int age) {
        this.name = name;      // 'this' refers to current object's variable
        this.breed = breed;
        this.age = age;
        System.out.println("Constructor called");
    }

    void bark() {
        System.out.println(name + " is barking!");
    }

    void showDetails() {
        System.out.println("Name: " + name);
        System.out.println("Breed: " + breed);
        System.out.println("Age: " + age);
    }
}