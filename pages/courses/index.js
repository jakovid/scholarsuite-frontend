import courses from "@/data/student-scores"
import CourseList from "@/components/courses/courseList"
import { useState } from "react"

export default function Courses(){

    return(
        <div className="w-100 flex justify-center items-center flex-col">
            <div className="text-3xl py-2">Courses</div>
            <CourseList courses={courses} />
            <div></div>

        </div>
    )
}