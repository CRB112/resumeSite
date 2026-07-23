import "./content.css"

export default function Content() {
    return (
        <div className="pageContent achievementsContent">
            <div className="panel pageCard panelLeft">
                <h2 className="title">Bachelor of Science</h2>
                <div className="infoRow">
                    <div className="left">Study:</div>
                    <div className="right">Computer Science</div>
                </div>
                <div className="infoRow">
                    <div className="left">University:</div>
                    <div className="right">Kent State University</div>
                </div>
                <div className="infoRow">
                    <div className="left">Graduation:</div>
                    <div className="right">May, 2027</div>
                </div>
                <div className="infoRow">
                    <div className="left">Relevant Coursework:</div>
                    <div className="right">
                        <ul style={{ marginTop: "0", padding: "0", marginLeft: "16px" }}>
                            <li>Data Structures</li>
                            <li>Algorithms</li>
                            <li>Database Design</li>
                            <li>Software Engineering</li>
                            <li>Computer Architecture</li>
                            <li>Operating Systems</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="panelRight">
                <div className="panel pageCard">
                    <h2 className="title">Hackathon</h2>
                    <div className="infoRow">
                        <div className="left">Kent Hack Enough 2026</div>
                        <div className="right">SnowFlake API winner</div>
                    </div>
                </div>

                <div className="panel pageCard">
                    <h2 className="title">Certifications</h2>
                    <div className="infoRow">
                        <div className="left">Google</div>
                        <div className="right">Google IT Automation With Python</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
