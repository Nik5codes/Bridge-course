public class Bankdemo implements Bank,Rbi {
    @Override
    public void displaydetails() {
        System.out.println("Account Name: " + accname);
        System.out.println("Account Number: " + accno);
    }

    @Override
    public void display() {
        System.out.println("Account Name: " + accnme);
        System.out.println("Account Number: " + accn);
    }

    public static void main(String[] args) {
        Bankdemo b1 = new Bankdemo();
        b1.displaydetails(); 
        b1.display();       
    }
}