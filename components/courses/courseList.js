import Link from "next/link"

export default function CourseList({courses}){
    return(
        <div className="grid grid-cols-2 gap-4">
            {courses.map(course => (
                <Link href={`/courses/${course.id}`} key={course.id} className="border-white border-2 flex items-center justify-center px-4 cursor-pointer" passHref>
                    {course.subject}
                </Link>
            ))}
        </div>
    )
}