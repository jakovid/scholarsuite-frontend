class Course{
    constructor(subject, teacher){
        this.subject = subject
        this.teacher = teacher
        this.students = []
    }
}

class Student{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.courses = []
        this.tests = []
        this.homework = []
        this.attendance = []
    }
}

class Test{
    constructor(subject, testType, teacher, firstName, lastName, date, score){
        this.subject = subject
        this.testType = testType
        this.teacher = teacher
        this.firstName = firstName
        this.lastName = lastName
        this.date = date
        this.score = score
    }
}