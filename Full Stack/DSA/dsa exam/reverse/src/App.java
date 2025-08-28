import java.util.*;
public class App {
    public static void main(String[] args) throws Exception {
        String [] str = {"Nikhil"};
        Scanner sc = new Scanner(System.in);
        int len = str.length;
        // System.out.println("Enter a string value"+len);
        // for(int i=0; i<str.length;i++)
        // {
        //     System.out.println(i+":");
        //     str[i] = sc.nextLine();
        // }
        String [] reverse = {" "};
        // for(int i=str.length-1; i>=0;i++)
        // {
        //     if(str[i] != null) {
        //         reverse += str[i] + " ";
        //     }
        // }        
        for(int i=str.length-1; i>=0;i--) {
            reverse.append(str[i]);
            }
        }

        for(int i=0; i<reverse.length;i++) {
            if(reverse[i] != null) {
                System.out.println(reverse[i]);
            }
        }
    }
}
