import {useNavigate} from "react-router-dom";

export default function EducationButton() {
    const navigate = useNavigate();
    
    return (
        <button className="mainButton" onClick={() => navigate("/Education")}>
            Education
        </button>
    )
}