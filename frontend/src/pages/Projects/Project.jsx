import ShiningPlanks from "../../components/animations/shiningPlanks"
import Content from "./content"

export default function Projects() {
    return (
        <>
            <div className="content">
                <ShiningPlanks />
                <div className="panel" style={{position:"relative"}}>
                    <h1>Projects</h1>
                    <Content />
                </div>
            </div>
        </>
    )
}