import {useNavigate} from "react-router-dom";

export default function ExperienceButton() {
    const navigate = useNavigate();
    
    return (
        <button className="mainButton" onClick={() => navigate("/Experiences")}>
            Experiences
        </button>
    )
}