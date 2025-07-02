public class ProductOfEvens {
    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,5,6,7,8,9,10};
        int product = 1;

        for (int num : numbers) {
            if (num % 2 == 0) {
                product *= num;
            }
        }

        System.out.println("Product of all even numbers: " + product);
    }
}