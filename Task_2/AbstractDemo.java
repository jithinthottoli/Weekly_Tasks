//abstract class and abstract methods 
abstract class Sum{ 
abstract int sum(int n1, int n2); 
abstract int sum(int n1, int n2, int n3); 
void disp(){ 
System.out.println("Method of class Sum"); 
} 
} 
class AbstractDemo extends Sum{ 
int sum(int n1, int n2){ 
return n1 + n2; 
} 
int sum (int n1, int n2, int n3){ 
return n1 + n2 + n3; 
} 
public static void main(String args[]){ 
Sum obj = new AbstractDemo(); 
System.out.println("The sum of two numbers : "+obj.sum(5, 6)); 
System.out.println("The sum of three numbers : "+obj.sum(5, 6, 7)); 
obj.disp();
} 
} 
//End of the program
