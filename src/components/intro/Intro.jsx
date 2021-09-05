import './intro.scss';
import Me from '../../images/me.png';
import DownArrow from '../../images/downArrow.png';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro(){

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            strings: ['developer', 'problem-solver', 'teamworker', 'learner' ] })
    },[])

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
                    <h2>A passionate <span ref = {textRef}></span></h2>
                </div>
                <a href="#protfolio">
                    <img src= {DownArrow}></img>
                </a>
            </div>           
        </div>
    )
}