import StudentTestChart from "./studentTestChart"

export default function CourseStudent({student, course}){
    return(
        <div className="flex flex-col">
            <div>Name: {student.studentName} </div>
            
            <StudentTestChart student={student} course={course} />
        </div>
    )
}