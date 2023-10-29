import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale,
    PointElement
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export default function StudentTestChart({ student }){

    const data = {
        labels: student.tests.map(test => test.date),
        datasets: [{
            labels: student.studentName,
            data: student.tests.map(test => test.score),
            backgroundColor: "red",
            borderColor: "white",
            pointElement: "red"
        }]
    }

    const options = {
        plugins: {
            legend: true,
        }
    }


    return(
        <Line data={data} options={options} >

        </Line>
    )
};
