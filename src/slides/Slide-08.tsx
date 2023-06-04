import { Slide } from '../Contexts/Slideshow';
import './Slide-08.css';
import "./Slide.css";
import bg8 from '../assets/slide-08-bg.jpg';

export default class Slide_08 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 5;
    }

    private points = [
        'No app store',
        'Access to native features',
        'No extra app required',
        'Smaller app sizes (tinder: 2mb vs 30mb)',
        'Automatic updates'
    ];

    public render(){
        return <div className='container'>
            <div className="title-8 bg-primary">
                <h1>Pros</h1>
            </div>
            <img className='bg-8' src={bg8} alt='bg'/>
            <div className='content-8'>
                <ul>
                {this.points.map((point, index) => {
                  return <li className={ this.counter > index ? 'show' : 'hide'}>
                    {point}
                  </li>
                })}
                </ul>
            </div>
           
        </div>
    }

}