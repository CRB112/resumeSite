import { useEffect} from 'react'

import ShiningPlanks from "../../components/animations/shiningPlanks"
import { setupBottomSlideInAnimation } from "../../components/animations/script"
import "../../components/animations/slideInAndUp.css"
import Content from "./content"


export default function Education() {
    useEffect(() => {
            setupBottomSlideInAnimation();
        }, []);
    return (
        <div className="content">
            <ShiningPlanks />
            <div className="panel slide-up" style={{position:"relative"}}>
                <h1>Education</h1>
                <Content />
            </div>
        </div>
    )
}