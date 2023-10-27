export default function CourseList({courses}){
    return(
        <div className="grid grid-cols-2 gap-4">
            {courses.map(course => (
                <div key={course.id} className="border-white border-2 flex items-center justify-center px-4 cursor-pointer">
                    {course.subject}
                </div>
            ))}
        </div>
    )
}