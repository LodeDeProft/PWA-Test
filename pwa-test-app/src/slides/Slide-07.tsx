import { Slide } from '../Contexts/Slideshow';
import './Slide-07.css';
import "./Slide.css";
import bg7 from '../assets/slide-07-bg.jpg';

export default class Slide_07 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 1;
    }

    private points = [
        'Register the service worker'
    ];

    public render(){
        return <div className='container'>
            <div className="title-7 bg-primary">
                <h1>Index.html</h1>
            </div>
            <div className='content-7'>
                <ul>
                {this.points.map((point, index) => {
                  return <li className={ this.counter > index ? 'show' : 'hide'}>
                    {point}
                  </li>
                })}
                </ul>
            </div>
            <img className='bg-7' src={bg7} alt='bg'/>
        </div>
    }

}