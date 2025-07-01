public class Student {
    String name;
    String idNumber;
    String major;

    public Student(String name, String idNumber, String major) {
        this.name = name;
        this.idNumber = idNumber;
        this.major = major;
    }

    public String getInfo() {
        return name + ", ID: " + idNumber + ", Major: " + major;
    }

    public static void main(String[] args) {
        Student s1 = new Student("Alice", "MCA001", "Computer Science");
        Student s2 = new Student("Bob", "MCA002", "Data Analytics");
        Student s3 = new Student("Charlie", "MCA003", "Cyber Security");

        System.out.println(s1.getInfo());
        System.out.println(s2.getInfo());
        System.out.println(s3.getInfo());
    }
}