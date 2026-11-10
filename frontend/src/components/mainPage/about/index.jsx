import { useEffect} from 'react'

import { setupBottomSlideInAnimation } from "../../animations/script"
import "../../animations/slideInAndUp.css"

export default function About() {
    useEffect(() => {
        return setupBottomSlideInAnimation();
    }, []);
    return (
        <section className="panel homePanel homeAbout slide-up">
            <h1>About me</h1>
            <p>
                I am a software engineer studying for a Bachelor of Science in Computer
                Science at Kent State University. My work spans full-stack applications,
                automation, and simulation, using C++, Rust, Python, and React. Recent
                projects include an evacuation simulator, a rule-based email organizer,
                and an AI-assisted homework platform. I enjoy building the systems behind
                useful tools and exploring how software and hardware work together.
            </p>
        </section>
    )
}
