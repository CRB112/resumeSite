import ProjectsButton from "./buttons/ProjectButton"
import EducationButton from "./buttons/Achievements"
import ExperienceButton from "./buttons/ExperienceButton"

import { useEffect} from 'react'
import { setupBottomSlideInAnimation } from "../../animations/script"
import "../../animations/slideInAndUp.css"


export default function Links() {
    useEffect(() => setupBottomSlideInAnimation(), []);
    
    return (
        <section className="panel homePanel homeLinks slide-up">
            <h1>More Info</h1>
                <div>
                    <ProjectsButton />
                    <EducationButton />
                    <ExperienceButton />
                </div>
        </section>
    )
}
