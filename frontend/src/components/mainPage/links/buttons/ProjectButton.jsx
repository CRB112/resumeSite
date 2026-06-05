import {useNavigate} from "react-router-dom";

export default function ProjectsButton() {
    const navigate = useNavigate();
    
    return (
        <button className="mainButton" onClick={() => navigate("/Projects")}>
            Projects
        </button>
    )
}
