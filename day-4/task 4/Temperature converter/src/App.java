public class App {
    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }

    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    public static void main(String[] args) throws Exception {
        double f = celsiusToFahrenheit(0);
        System.ouDt.println("0°C in Fahrenheit: " + f);

        double c = fahrenheitToCelsius(98.6);
        System.out.println("98.6°F in Celsius: " + c);
    }
}
