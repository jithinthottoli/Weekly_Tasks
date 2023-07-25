//abstract parent class 
abstract class Animal{ 
public abstract void sound(); //abstract method 
} 
public class Dog extends Animal{ 
public void sound(){ 
System.out.println("Woof"); 
} 
public static void main(String args[ ]){ 
Animal obj = new Dog(); 
obj.sound();
} 
} 
//End of the program
