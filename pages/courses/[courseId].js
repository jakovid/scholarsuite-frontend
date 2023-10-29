import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import courses from "@/data/student-scores";
import CourseStudent from "@/components/courses/courseStudent";
import Link from "next/link";


export default function CoursePage(){
    const router = useRouter()

    const { courseId } = router.query;

    const [course, setCourse] = useState(null)

    useEffect(() => {
        if (courseId) {
            const foundCourse = courses.find(c => c.id == courseId);
            setCourse(foundCourse);
        }
    }, [courseId])

    if(!course){
        return <p>No Course Found. {courseId}</p>
    }

    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-3xl">{course.subject}</div>
            <div> Instructor: {course.teacherName}</div>
            <Link href={"/courses"} className="border-2 border-white flex w-40 justify-center" passHref>
                View All Courses
            </Link>
            <div className="flex flex-wrap gap-4 p-10 justify-center">
                {course.students.map(student => (
                    <CourseStudent student={student} course={course.subject} />
                ))}
            </div>
            
            <Link href={"/courses"} className="border-2 border-white flex w-40 justify-center" passHref>
                View All Courses
            </Link>
        </div>
    )
}