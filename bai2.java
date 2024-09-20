import java.util.Scanner;
public class bai2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập chuỗi: ");
        String chuoi = sc.nextLine();
        int sokituchuoi = chuoi.length();
        System.out.print("Số kí tự của chuỗi là " + sokituchuoi);
    }
}