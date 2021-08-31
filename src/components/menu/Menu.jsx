import './menu.scss'

export default function Menu( {rightBar, setRightBar}){
    return (
        <div className = {"menu " + (rightBar && "active")} >
            <ul>
                <li>
                    <a href="#intro" onClick={()=>setRightBar(false)}>Home</a>
                </li>
                <li>
                    <a href="#protfolio" onClick={()=>setRightBar(false)}>Resume</a>
                </li>
                <li>
                    <a href="#projects" onClick={()=>setRightBar(false)}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>setRightBar(false)}>Contact</a>
                </li>
            </ul>
        </div>
    )
}