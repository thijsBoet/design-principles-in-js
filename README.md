# Design Patterns in JavaScript
## 1 Object Oriented Programming
### ABSTRACTION
> Hide the details of the implementation from the user of the class and only expose the functionality to the user of the class.

### ENCAPSULATION
> The bundling of data, along with the methods that operate on that data, into a single unit. (classes)

### INHERITANCE
> The procedure in which one class inherits the attributes and methods of another class.

### POLYMORPHISM
> The ability of an object to take on many forms.

## 2 SOLID design principles
### Single responsibility principle
> Every module, class or function in a computer program should have responsibility over a single part of that program's functionality, and it should encapsulate that part. All of that module, class or function's services should be narrowly aligned with that responsibility
### Open Close Principle
> Software entities (classes, modules, methods, etc.) should be open for extension, but closed for modification.
### Liskov Substitution Principle
> Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass.
### Interface Segregation Principle
> A client should not be exposed to methods it doesn't need. Declaring methods in an interface that the client doesn't need pollutes the interface and leads to a “bulky” or “fat” interface.
### Dependency Inversion Principle
> High level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions.