class Employee {
    String name;
    String employeeId;
    double salary;

    public Employee(String name, String employeeId, double salary) {
        this.name = name;
        this.employeeId = employeeId;
        this.salary = salary;
    }

    public String getDetails() {
        return "Name: " + name + ", ID: " + employeeId + ", Salary: " + salary;
    }
}

class Manager extends Employee {
    String department;

    public Manager(String name, String employeeId, double salary, String department) {
        super(name, employeeId, salary);
        this.department = department;
    }

    @Override
    public String getDetails() {
        return super.getDetails() + ", Department: " + department;
    }
}

class Developer extends Employee {
    String programmingLanguage;

    public Developer(String name, String employeeId, double salary, String programmingLanguage) {
        super(name, employeeId, salary);
        this.programmingLanguage = programmingLanguage;
    }

    @Override
    public String getDetails() {
        return super.getDetails() + ", Programming Language: " + programmingLanguage;
    }
}

public class Company {
    public static void main(String[] args) {
        Manager m = new Manager("Priya", "EMP001", 80000, "Finance");
        Developer d = new Developer("Karan", "EMP002", 75000, "Java");

        System.out.println(m.getDetails());
        System.out.println(d.getDetails());
    }
}
