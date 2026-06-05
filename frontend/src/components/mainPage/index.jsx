import About from "./about"
import Links from "./links"

export default function Main() {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <About />
            <Links />
        </div>
    )
}