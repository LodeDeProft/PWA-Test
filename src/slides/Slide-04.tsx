import { Slide } from '../Contexts/Slideshow';
import './Slide-04.css';
import "./Slide.css";
import bg4 from '../assets/slide-04-bg.jpg';

export default class Slide_04 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 5;
    }

    private points = [
        'Make a website',
        'Https connection',
        'Manifest.json',
        'ServiceWorker.Js',
        'Reference in Index.html'
    ];

    public render(){
        return <div className='container'>
            <div className="title-4 bg-primary">
                <h1>How to PWA?</h1>
            </div>
            <div className='content-4'>
                <ul>
                {this.points.map((point, index) => {
                  return <li className={ this.counter > index ? 'show' : 'hide'}>
                    {point}
                  </li>
                })}
                </ul>
            </div>
            <img className='bg-4' src={bg4} alt='bg'/>
        </div>
    }

}