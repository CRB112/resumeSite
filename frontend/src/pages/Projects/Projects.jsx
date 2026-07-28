import { useEffect} from 'react'
import { Link } from "react-router-dom"

import ShiningPlanks from "../../components/animations/shiningPlanks"
import { setupBottomSlideInAnimation } from "../../components/animations/script"
import "../../components/animations/slideInAndUp.css"
import Content from "./content"
import ContactDetails from "../../components/ContactDetails"

export default function Projects() {
    useEffect(() => {
            setupBottomSlideInAnimation();
        }, []);
    return (
        <div className="content">
            <ShiningPlanks />
            <div className="panel pagePanel slide-up">
                <header className="pageHeader">
                    <h1>Projects</h1>
                    <Link className="homeButton" to="/">← Home</Link>
                </header>
                <Content />
                <ContactDetails />
            </div>
        </div>
    )
}
