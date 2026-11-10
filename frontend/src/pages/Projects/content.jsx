import "./content.css"
import projects from "./projects.json"

export default function Content() {
    return (
        <div className="pageContent projectsContent">
            <p className="projectsIntro">Selected work from my GitHub, including personal projects and team contributions.</p>
            <div className="projectGrid">
                {projects.map(project => (
                    <article className="pageCard projectCard" key={project.title}>
                        <h2>{project.title}</h2>
                        <p className="projectStack">{project.stack}</p>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span><span className="sr-only">: {project.title} (opens in a new tab)</span></a>
                    </article>
                ))}
            </div>
        </div>
    )
}
