import { Slide } from '../Contexts/Slideshow';
import './Slide-02.css';
import "./Slide.css";
import bg2 from '../assets/slide-02-bg.jpg';

export default class Slide_02 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 4;
    }

    private points = [
        'Talk by Lemon',
        'What is it',
        'How to PWA',
        'Pros/Cons'
    ];

    public render(){
        return <div className='container'>
            <div className="title-2 bg-primary">
                <h1>Introduction</h1>
            </div>
            <img className='bg-2' src={bg2} alt='bg'/>
            <div className='content-2'>
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