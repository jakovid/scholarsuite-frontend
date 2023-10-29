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

    addTest(course, testType, date, score) {
        if (!(course instanceof Course)) {
            throw new Error('Invalid course information');
        }
        const test = new Test(course, testType, this, date, score); // 'this' refers to the student instance
        this.tests.push(test);
    }
}

class Test{
    constructor(course, testType, student, date, score){
        if (!(course instanceof Course)) {
            throw new Error('Invalid course');
        }
        if (!(student instanceof Student)) {
            throw new Error('Invalid student');
        }

        this.subject = course.subject
        this.testType = testType
        this.teacherName = course.teacherName
        this.student = student
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

let students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10, student11, student12, student13, student14, student15, student16, student17, student18, student19, student20]


const mathTestsInfo = [
    {testType: "U1-3", date: "2023-9-28"},
    {testType: "U4-6", date: "2023-10-14"},
    {testType: "Midterm", date: "2023-10-28"},
    {testType: "U7-9", date: "2023-11-14"},
    {testType: "U10-12", date: "2023-11-28"},
    {testType: "Final", date: "2023-12-28"}
];

// Function to generate a random score between 65 and 100
function getRandomScore() {
    return Math.floor(Math.random() * (100 - 65 + 1)) + 65; // The score is between 65 and 100
}

// Enroll students in Math and generate random tests
for (let i = 0; i < 10; i++){
    course1.addStudent(students[i]);
    mathTestsInfo.forEach(testInfo => {
        const score = getRandomScore(); // Get a random score for each test
        students[i].addTest(course1, testInfo.testType, testInfo.date, score);
    });
}

//Enroll students in Science and Generate Random Tests
for (let i = 10; i < students.length; i++){
    course2.addStudent(students[i]);
    mathTestsInfo.forEach(testInfo => {
        const score = getRandomScore(); // Get a random score for each test
        students[i].addTest(course2, testInfo.testType, testInfo.date, score);
    });
}

//Enroll students in History and Generate Random Tests
for (let i = 0; i < students.length; i+= 2){
    course3.addStudent(students[i]);
    mathTestsInfo.forEach(testInfo => {
        const score = getRandomScore(); // Get a random score for each test
        students[i].addTest(course3, testInfo.testType, testInfo.date, score);
    });
}

//Enroll students in English and Generate Random Tests
for (let i = 1; i < students.length; i+= 2){
    course4.addStudent(students[i]);
    mathTestsInfo.forEach(testInfo => {
        const score = getRandomScore(); // Get a random score for each test
        students[i].addTest(course4, testInfo.testType, testInfo.date, score);
    });
}


courses.push(course1, course2, course3, course4);

export default courses;