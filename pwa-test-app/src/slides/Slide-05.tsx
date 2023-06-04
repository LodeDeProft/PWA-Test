import { Slide } from '../Contexts/Slideshow';
import './Slide-05.css';
import "./Slide.css";
import bg5 from '../assets/slide-05-bg.jpg';

export default class Slide_05 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 2;
    }

    private points = [
        'Allows the install',
        'Mostly styling setup'
    ];

    public render(){
        return <div className='container'>
            <div className="title-5 bg-primary">
                <h1>Manifest.json</h1>
            </div>
            <div className='content-5'>
                <ul>
                {this.points.map((point, index) => {
                  return <li className={ this.counter > index ? 'show' : 'hide'}>
                    {point}
                  </li>
                })}
                </ul>
            </div>
            <img className='bg-5' src={bg5} alt='bg'/>
        </div>
    }

}