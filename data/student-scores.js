class Course{
    constructor(id, subject, teacherName){
        this.id = id
        this.subject = subject
        this.teacherName = teacherName
        this.students = []
    }
}

class Student{
    constructor(studentName){
        this.studentName = studentName
        this.courses = []
        this.tests = []
        this.homework = []
        this.attendance = []
    }
}

class Test{
    constructor(subject, testType, teacherName, studentName, date, score){
        this.subject = subject
        this.testType = testType
        this.teacherName = teacherName
        this.studentName = studentName
        this.date = date
        this.score = score
    }
}

let courses = []

let student1 = new Student("Steven Smiff");
let student2 = new Student("Jack Johns");
let student3 = new Student("Billy Bob");
let student4 = new Student("Sarah Connor");
let student5 = new Student("Lily Evans");
let student6 = new Student("Chris Peterson");
let student7 = new Student("Mia Chang");
let student8 = new Student("Daniel Kaber");
let student9 = new Student("Anita Wells");
let student10 = new Student("Tom Sanders");
let student11 = new Student("Alexis Jordan");
let student12 = new Student("Erica Matthews");
let student13 = new Student("Gary Nolan");
let student14 = new Student("Eva Rodriguez");
let student15 = new Student("Neil Armstrong");
let student16 = new Student("Ashley White");
let student17 = new Student("Isaac Newton");
let student18 = new Student("Nina Morris");
let student19 = new Student("Oliver Martin");
let student20 = new Student("Yasmine Garcia");

let course1 = new Course(1, "Math", "Mr. David Jones");
let course2 = new Course(2, "Science", "Ms. Stephanie Collins");
let course3 = new Course(3, "History", "Mr. Mark Clarkson");
let course4 = new Course(4, "English", "Mrs. Susan Anthony");

courses.push(course1, course2, course3, course4);

export default courses;