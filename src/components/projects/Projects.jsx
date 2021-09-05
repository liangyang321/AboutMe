import './projects.scss'
import PetFinder from "../../images/petFinder.png"
import SpaceInvader from "../../images/spaceInvader.png"
import System from "../../images/system.png";
import Arrow from "../../images/arrow.png";
import { useState } from 'react';
export default function Projects(){
    const[currentSlide, setCurrentSlide] = useState(0);   
    const data = [
        {
          id: "1",
          title: "Pet finder Web Application",
          desc:
            "This application allows use to search, donate and adpot pets.",
          img: PetFinder,
          url : "https://koreylo9.github.io/PetQuest"
        },
        {
          id: "2",
          title: "Space Invader",
          desc:
            "This is a classic game space invader, user can shoot sprites and got different points",
          img: SpaceInvader,
          url: "https://youtu.be/LfDRrSdlXlU"
        },
        {
          id: "3",
          title: "Multi-Thread system",
          desc:
            "This is a client-server system that enables multiple clients to request a server to display a list of jokes or proverbs. ",
          img:System,
          url: "https://github.com/liangyang321/Joke-Server"
        },
      ];

      const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:data.length-1) :
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1:0);
      }
    return (
        <div className = "projects" id ="projects">
            <div className = "slider" style ={{transform:`translateX(-${currentSlide*100}vw)`}}>
            {data.map(d =>(
                <div className= "container" key = {d.id}>
                    <div className = "item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{d.title}</h2>
                                <p> {d.desc}
                                </p>
                                <p onClick={() => window.open(d.url)}>Project Link</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src = {d.img}></img>
                        </div>                        
                    </div>
                </div>))}
            </div>
            <img src={Arrow} className = "arrow left" alt = "" onClick={()=>handleClick("left")}></img>
            <img src={Arrow} className = "arrow right" alt = "" onClick={()=>handleClick()}></img>
        </div>
    )
}