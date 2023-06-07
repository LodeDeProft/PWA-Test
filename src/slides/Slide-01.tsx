import "./Slide-01.css";
import "./Slide.css";
import bg1 from '../assets/slide_01_bg.png';
import { Slide } from "../Contexts/Slideshow";
import ParticleSystem from "../particle-system/particle-system";
import { Color, Vector2 } from "../particle-system/math";

export default class Slide_01 extends Slide{
    public render(){
        return <div className="container">
        <div className="title-1 bg-primary">
            <h1>How to make your website a progressive web app</h1>
            <h2>Recap</h2>
        </div>
        <img src={bg1} className="bg-1" alt="bg"/>
        </div>
    }
}