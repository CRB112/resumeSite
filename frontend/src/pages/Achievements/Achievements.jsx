import { useEffect} from 'react'

import ShiningPlanks from "../../components/animations/shiningPlanks"
import { setupBottomSlideInAnimation } from "../../components/animations/script"
import "../../components/animations/slideInAndUp.css"
import Content from "./content"


export default function Achievements() {
    useEffect(() => {
            setupBottomSlideInAnimation();
        }, []);
    return (
        <div className="content">
            <ShiningPlanks />
            <div className="panel pagePanel slide-up">
                <h1>Achievements</h1>
                <Content />
            </div>
        </div>
    )
}
