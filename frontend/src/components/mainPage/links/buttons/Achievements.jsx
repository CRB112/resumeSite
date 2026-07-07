import {useNavigate} from "react-router-dom";

export default function AchievementsButton() {
    const navigate = useNavigate();
    
    return (
        <button className="mainButton" onClick={() => navigate("/Achievements")}>
            Achievements
        </button>
    )
}