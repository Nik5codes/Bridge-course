public class App {
    public static void main(String[] args) {
        int [] temperatures = {30, 32, 31, 29, 28, 27, 26, 25, 24, 23};
        int highest = Integer.MIN_VALUE;
        int sum = 0;
        for (int i=0; i<temperatures.length; i++) {
            
            if (highest < temperatures[i]) {
                highest = temperatures[i];
            }
            sum += temperatures[i];
            System.out.println("Temperature at index " + i + ": " + temperatures[i]);
        }
        double average = (double) sum / temperatures.length;
        System.out.println("sum: " + sum);
        System.out.println("Average temperature: " + average);
        System.out.println("Highest temperature: " + highest);

    }
}