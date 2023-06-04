import "./Slide-11.css";
import "./Slide.css";
import bg11_1 from '../assets/slide-10-1-bg.jpg';
import bg11_2 from '../assets/slide-10-2-bg.jpg';
import { Slide } from "../Contexts/Slideshow";

export default class Slide_11 extends Slide{
    public render(){
        return <div className="container">
                <img src={bg11_1} className="bg-11-1" alt="bg"/>
                 <div className="title-11 bg-primary">
                    <h1>Thank you</h1>
                </div>
                <img src={bg11_2} className="bg-11-2" alt="bg"/>
        </div>
    }
}