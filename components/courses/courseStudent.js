import StudentTestChart from "./studentTestChart"

export default function CourseStudent({student, course}){
    return(
        <div className="flex flex-col border-white border-2 p-2 w-80">
            <div>Name: {student.studentName} </div>
            
            <StudentTestChart student={student} course={course} />
        </div>
    )
}