class Course{
    constructor(id, subject, teacherName){
        this.id = id
        this.subject = subject
        this.teacherName = teacherName
        this.students = []
    }

    addStudent(student) {
        // Add the student to the course
        this.students.push(student);
        
        // Add the course to the student's courses
        student.addCourse(this);
    }
}

class Student{
    constructor(studentName){
        this.studentName = studentName
        this.courses = []
        this.tests = []
    }

    addCourse(course) {
        // Prevent duplicate course entries
        if (!this.courses.some(c => c.id === course.id)) {
            this.courses.push(course);
        }
    }

    addTest(test) {
        this.tests.push(test);
    }
}

class Test{
    constructor(subject, testType, student, date, score){
        this.subject = subject
        this.testType = testType
        this.teacherName = subject.teacherName
        this.student = student
        this.date = date
        this.score = score

        this.student.addTest(this)
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

course1.addStudent(student1)
course1.addStudent(student2)

let test1 = new Test(course1, "Test", student1, "2023-10-28", 76)


courses.push(course1, course2, course3, course4);

export default courses;