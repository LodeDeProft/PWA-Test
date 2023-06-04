import { Slide } from '../Contexts/Slideshow';
import './Slide-06.css';
import "./Slide.css";
import bg6 from '../assets/slide-06-bg.jpg';

export default class Slide_06 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 5;
    }

    private points = [
        'Intercepts network requests',
        'Running background tasks',
        'Advanced caching',
        'Permissions',
        'Syncing and Setup of the PWA features'
    ];

    public render(){
        return <div className='container'>
            <div className="title-6 bg-primary">
                <h1>ServiceWorker.js</h1>
            </div>
            <img className='bg-6' src={bg6} alt='bg'/>
            <div className='content-6'>
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