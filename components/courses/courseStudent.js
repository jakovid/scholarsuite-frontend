import { Line } from "react-chartjs-2";


export default function CourseStudent({student}){
    return(
        <div className="flex flex-col">
            <div>Name: {student.studentName} </div>
            <div>{student.tests[0]?.score}</div>
        </div>
    )
}