import './intro.scss';
import Me from '../../images/me.png';
import DownArrow from '../../images/downArrow.png';

export default function Intro(){
    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className="imageContainer">
                    <img src ={Me}></img>
                </div>
            </div> 
            <div className="right">
                <div className="warpper">
                    <h3>Hi there, I'm</h3>
                    <h1>Ang Li</h1>
                    <h2>A passionate developer</h2>
                </div>
                <a href="#protfolio">
                    <img src= {DownArrow}></img>
                </a>
            </div>           
        </div>
    )
}