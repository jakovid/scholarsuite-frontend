
export default function CourseStudents({course}){
    return(
        <div className="flex flex-col">
            {course.students.map(student => (
                <div>{student.studentName}</div>
            ))}
        </div>
    )
}