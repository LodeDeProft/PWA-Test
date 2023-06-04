import './App.css';
import Slide_01 from './slides/Slide-01';
import { Slideshow } from './Contexts/Slideshow';
import { useEffect, useState} from 'react';
import Slide_02 from './slides/Slide-02';
import Slide_03 from './slides/Slide-03';
import Slide_04 from './slides/Slide-04';
import Slide_05 from './slides/Slide-05';
import Slide_06 from './slides/Slide-06';
import Slide_07 from './slides/Slide-07';
import Slide_08 from './slides/Slide-08';
import Slide_09 from './slides/Slide-09';
import Slide_10 from './slides/Slide-10';
import Slide_11 from './slides/Slide-11';

const slideShow = new Slideshow([
  new Slide_01([]),
  new Slide_02([]),
  new Slide_03([]),
  new Slide_04([]),
  new Slide_05([]),
  new Slide_06([]),
  new Slide_07([]),
  new Slide_08([]),
  new Slide_09([]),
  new Slide_10([]),
  new Slide_11([]),
]);

function App() {
  const [currentSlide, setSlide] = useState(slideShow.getCurrentSlide().render());
  useEffect(() => {
    const onKeyDown = (kbEvent: KeyboardEvent)=>{   
      const key = kbEvent.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
      switch (key) { // change to event.key to key to use the above variable
        case "ArrowLeft":
          kbEvent.preventDefault();
          slideShow.previous();
          break;
        case "ArrowRight":
          kbEvent.preventDefault();
          slideShow.next();
          break;
      }
    };
      window.addEventListener('keydown', onKeyDown);
    return function(){
      window.removeEventListener('keydown', onKeyDown);
  };
  },[slideShow]);

  useEffect(() => {
    slideShow.subscribeOnStateChanged((slide) => {
    setSlide(slide);
    });
  },[currentSlide, setSlide, slideShow]);
  return currentSlide;
}

export default App;
