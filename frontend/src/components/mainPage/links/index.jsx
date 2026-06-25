import ProjectsButton from "./buttons/ProjectButton"
import EducationButton from "./buttons/EducationButton"
import ExperienceButton from "./buttons/ExperienceButton"

import { useEffect} from 'react'
import { setupBottomSlideInAnimation } from "../../animations/script"
import "../../animations/slideInAndUp.css"


export default function Links() {
    useEffect(() => {setupBottomSlideInAnimation();}, []);
    
    return (
        <div className="panel slide-up" style={{flex:"1",}}>
            <h1>More Info</h1>
                <div>
                    <ProjectsButton />
                    <EducationButton />
                    <ExperienceButton />
                </div>
        </div>
    )
}