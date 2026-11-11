import "./content.css"
import { useState } from "react"

export default function Content() {
    const [openRole, setOpenRole] = useState(null)
    const roles = [
        {
            title: "Lead Aquatics Supervisor",
            dates: "2024 - Present",
            bullets: [
                "Lead aquatic safety planning and daily operations for a lifeguard team in a high-traffic recreational environment.",
                "Coordinate staff in-service training to reinforce emergency response procedures, water-rescue skills, and safety compliance.",
                "Partner with internal departments to resolve operational issues, communicate safety needs, and support facility-wide programming."
            ]
        },
        {
            title: "Computer Science Tutor",
            dates: "August 2026 – Present",
            bullets: [
                "Tutor students through Kent State University's Department of Computer Science, helping them work through programming concepts and coursework."
            ]
        }
    ]

    return (
        <div className="pageContent experienceContent">
            <div className="panel pageCard">
                {roles.map((role) => {
                    const isOpen = openRole === role.title

                    return (
                        <div className="experienceEntry" key={role.title}>
                            <button
                                onClick={() => setOpenRole(isOpen ? null : role.title)}
                                className="experienceToggle"
                                aria-expanded={isOpen}
                            >
                                <span>
                                    {role.title}
                                    <span className="experienceDates">{role.dates}</span>
                                </span>
                                <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                            </button>
                            {isOpen && (
                                <div className="experienceMenu">
                                    <ul>
                                        {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
