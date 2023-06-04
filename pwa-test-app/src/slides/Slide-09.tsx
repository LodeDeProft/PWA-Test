import { Slide } from '../Contexts/Slideshow';
import './Slide-09.css';
import "./Slide.css";
import bg9 from '../assets/slide-09-bg.jpg';

export default class Slide_09 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 2;
    }

    private points = [
        'No app store',
        'No full access to native features'
    ];

    public render(){
        return <div className='container'>
            <div className="title-9 bg-primary">
                <h1>Cons</h1>
            </div>
            <img className='bg-9' src={bg9} alt='bg'/>
            <div className='content-9'>
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