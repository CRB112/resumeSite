import ShiningPlanks from "../../components/animations/shiningPlanks"
import Content from "./content"


export default function Experience() {
    return (
        <>
            <div className="content">
                <ShiningPlanks />
                <div className="panel" style={{position:"relative"}}>
                    <h1>Experience</h1>
                    <Content />
                </div>
            </div>
        </>
    )
}