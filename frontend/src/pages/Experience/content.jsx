import "./content.css"
import { useState } from 'react'

export default function Content() {
    const[open, setOpen] = useState(false)
    
    return (

        <div className="pageContent experienceContent">
            <div className="panel pageCard">
                <button
                    onClick={() => setOpen(!open)}
                    className="experienceToggle"
                >
                    Dropdown
                </button>
                {open && (
                    <div className="experienceMenu">
                        <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Earnings</a></li>
                        <li><a href="#">Sign out</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
