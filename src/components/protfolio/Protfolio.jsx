import './protfolio.scss'

import UW from "../../images/UW.jpg";
import DE from "../../images/DE.jpg";
import FS from "../../images/fs.png.png";
export default function Protfolio(){
    const data = [
        {
            id: "1",
            logo:UW,
            shcool:"UW-Madison",
            Major:"BS Computer Science",
            link: "https://www.wisc.edu/"
        },
        {
            id: "2",
            logo:DE,
            shcool:"DePaul University",
            Major:"MS Computer Science",
            link:"https://www.depaul.edu/Pages/default.aspx"
        },
        {
            id: "3",
            logo:FS,
            shcool:"FindingSpaces",
            Major:"SWE Intern",
            link: "https://findingspaces.com/"
        }
    ]
    return (
        
        <div className = "protfolio" id ="protfolio">
            <a onClick={() => window.open('https://drive.google.com/file/d/1PlxKXRA3R8liq869Lzw1_vjlUYAOe4tN/view?usp=sharing')}>About Me</a>
            <div className = "container">
                {data.map(d => (
                <div className = "card" key = {d.id}>
                    <div className = "top">
                    <img src= {d.logo} alt="" />
                    </div>
                    <div className = "center"> 
                        <a onClick={() => window.open(d.link)}>{d.shcool}</a>
                    </div>
                    <div className = "bot">
                       <h3> {d.Major}   </h3>
                    </div>
                </div>
                ))}
            </div>
        
           
        </div>
    )
}

/*
<div className ="resume">
                    <a href="https://drive.google.com/file/d/1PlxKXRA3R8liq869Lzw1_vjlUYAOe4tN/view?usp=sharing">Resume</a>
                </div>
*/