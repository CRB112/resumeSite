import ProjectsButton from "./buttons/ProjectButton"
import EducationButton from "./buttons/EducationButton"


export default function Links() {
    return (
        <div className="panel">
            <h1 style={{display:"flex", justifySelf:"flex-start"}}>More Info</h1>
                <div>
                    <ProjectsButton />
                    <EducationButton />
                </div>
        </div>
    )
}