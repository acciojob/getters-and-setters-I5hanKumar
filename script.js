//complete this code
class Person {
constructor(name, age){
	this.name = name;
	this.age = age;

	study(){
		console.log(name + "is studying")
	}
	teach(){
		console.log(name + "is teaching")
	}
}}
get name(){
	return this.name;
}

set age(newage){
	this.age = newage;
}

class Student extends Person {
	const Person = new Person("John", 25);
	console.log(Person.name);
	console.log(Person.study);
}

class Teacher extends Person {
	const Person = new Person("Alice", 22);
	console.log(Person.name);
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
