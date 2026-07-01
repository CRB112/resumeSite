import projects from "../../pages/Projects/projects.json"
import "./carousel.css"
import useCarousel from "./sliding";

export default function Carousel() {
    const current = useCarousel(projects.length)
    const slideWidth = 356;

    return (
        
        <div className="carousel">
            <div className="track" style={{ transform: `translateX(-${current * slideWidth}px)` }}>
                {projects.map(project => (
                    <div className="carouselItem" key={project.title}>
                        <h2>{project.title}</h2>
                        <a href={project.link}>Link</a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}