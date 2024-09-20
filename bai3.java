import java.util.*;
public class bai3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập chiều dài hình chữ nhật: ");
        double a = Double.parseDouble(sc.nextLine());
        System.out.print("Nhập chiều rộng hình chữ nhật: ");
        double b = Double.parseDouble(sc.nextLine());
        System.out.println("Chu vi hình chữ nhật là: " + (double)(a+b)*2);
        System.out.println("Diện tích hình chữ nhật là: " + a*b);
    }
}