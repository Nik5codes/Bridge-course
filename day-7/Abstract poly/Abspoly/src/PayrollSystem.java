public class PayrollSystem {

    // Abstract class: Encapsulates common structure
    abstract static class Employee {
        String name;

        Employee(String name) {
            this.name = name;
        }

        // Abstract method to be overridden
        public abstract double calculatePay();
    }

    // Subclass 1: Salaried Employee
    static class SalariedEmployee extends Employee {
        double monthlySalary;

        SalariedEmployee(String name, double monthlySalary) {
            super(name);
            this.monthlySalary = monthlySalary;
        }

        @Override
        public double calculatePay() {
            return monthlySalary;
        }
    }

    // Subclass 2: Hourly Employee
    static class HourlyEmployee extends Employee {
        double hourlyRate;
        int hoursWorked;

        HourlyEmployee(String name, double hourlyRate, int hoursWorked) {
            super(name);
            this.hourlyRate = hourlyRate;
            this.hoursWorked = hoursWorked;
        }

        @Override
        public double calculatePay() {
            return hourlyRate * hoursWorked;
        }
    }

    // Main method to run the program
    public static void main(String[] args) {
        Employee emp1 = new SalariedEmployee("Nikhil", 30000);
        Employee emp2 = new HourlyEmployee("ram", 200, 120);

        System.out.println(emp1.name + "'s Pay: ₹" + emp1.calculatePay());
        System.out.println(emp2.name + "'s Pay: ₹" + emp2.calculatePay());
    }
}
