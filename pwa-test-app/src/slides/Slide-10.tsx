import { Slide } from '../Contexts/Slideshow';
import './Slide-10.css';
import "./Slide.css";

export default class Slide_10 extends Slide{

    constructor(props : any) {
        super(props);
        this.maxCounter = 5;
    }

    private references = [
        {display: "Lemon's Example: Party", url:"https://partypartypartyparty.party/"},
        {display: "Lemon's Example: Damn Dog", url:"https://damn.dog/"},
        {display: "Lemon's NDC talk", url:"https://www.youtube.com/watch?v=beZIwiTi_Ik"},
        {display: "Overview and examples of all PWA features", url:"https://whatpwacando.today/"},
        {display: "Microsoft's PWA tutorial", url:"https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/"}
    ];

    public render(){
        return <div className='container'>
            <div className="title-10 bg-primary">
                <h1>References</h1>
            </div>
            <div className='content-10'>
                <ul>
                {this.references.map((reference, index) => {
                  return <li className={ this.counter > index ? 'show' : 'hide'}>
                    <a href={reference.url} target='_blank'>{reference.display}</a>
                  </li>
                })}
                </ul>
            </div>     
        </div>
    }

}