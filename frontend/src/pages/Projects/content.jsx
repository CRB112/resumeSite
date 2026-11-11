import { useEffect, useRef, useState } from "react"
import "./content.css"
import projects from "./projects.json"

export default function Content() {
    const windowRef = useRef(null)
    const resumeAt = useRef(0)
    const [autoScroll, setAutoScroll] = useState(
        () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )

    useEffect(() => {
        if (!autoScroll) return

        const viewport = windowRef.current
        resumeAt.current = performance.now() + 3000
        let reachedEndAt = null

        const timer = window.setInterval(() => {
            const now = performance.now()
            if (document.hidden || now < resumeAt.current || viewport.matches(":hover, :focus-within")) {
                reachedEndAt = null
                return
            }

            const maxScroll = viewport.scrollHeight - viewport.clientHeight
            if (maxScroll <= 0) return

            if (viewport.scrollTop < maxScroll - 1) {
                viewport.scrollTop += 1
                reachedEndAt = null
                return
            }

            reachedEndAt ??= now
            if (now - reachedEndAt >= 3000) {
                viewport.scrollTop = 0
                resumeAt.current = now + 3000
                reachedEndAt = null
            }
        }, 40)

        return () => window.clearInterval(timer)
    }, [autoScroll])

    function deferAutoScroll() {
        resumeAt.current = performance.now() + 4000
    }

    return (
        <div className="pageContent projectsContent">
            <div className="projectControls">
                <button type="button" onClick={() => setAutoScroll(value => !value)}>
                    {autoScroll ? "Pause auto-scroll" : "Start auto-scroll"}
                </button>
            </div>
            <div
                className="projectWindow"
                ref={windowRef}
                role="region"
                aria-label="Project cards"
                tabIndex={0}
                onWheel={deferAutoScroll}
                onTouchMove={deferAutoScroll}
                onTouchEnd={deferAutoScroll}
            >
                <div className="projectGrid">
                    {projects.map(project => (
                        <article className="pageCard projectCard" key={project.title}>
                            <h2>{project.title}</h2>
                            <p className="projectStack">{project.stack}</p>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                View on GitHub <span aria-hidden="true">↗</span>
                                <span className="sr-only">: {project.title} (opens in a new tab)</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
