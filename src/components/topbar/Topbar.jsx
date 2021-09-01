import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function Topbar( {rightBar, setRightBar} ){
    return (
        <div className = {"topbar " + (rightBar && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href ="#intro" className ="logo"> AL </a>
                    <div className="itemContainer">
                        <Person className = "icon"/>
                        <span>608-630-0924</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className = "icon"/>
                        <span>liangyang321@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="rightbar" onClick={()=> setRightBar(!rightBar)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}