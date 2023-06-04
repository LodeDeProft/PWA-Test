import { Slide } from '../Contexts/Slideshow';
import './Slide-03.css';
import "./Slide.css";
import bg2 from '../assets/slide-03-bg.jpg';

export default class Slide_03 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 3;
    }

    private points = [
        'It’s a website you can use offline',
        'Acts like a native app',
        'Allows for some native features'
    ];

    public render(){
        return <div className='container'>
            <div className="title-3 bg-primary">
                <h1>What is a PWA?</h1>
            </div>
            <div className='content-3'>
                <ul>
                {this.points.map((point, index) => {
                  return <li className={ this.counter > index ? 'show' : 'hide'}>
                    {point}
                  </li>
                })}
                </ul>
            </div>
            <img className='bg-3' src={bg2} alt='bg'/>
        </div>
    }

}