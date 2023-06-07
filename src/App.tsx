import './App.css';
import Slide_01 from './slides/Slide-01';
import { Slideshow } from './Contexts/Slideshow';
import { useEffect, useRef, useState} from 'react';
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
import { Vector2, Color } from './particle-system/math';
import ParticleSystem from './particle-system/particle-system';

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
  const [confettiSpawners, setConfettiSpawners] = useState<number[]>([]);
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
          case "ArrowUp":
            setConfettiSpawners([...confettiSpawners, confettiSpawners.length])
            break;
      }
    };
      window.addEventListener('keydown', onKeyDown);
    return function(){
      window.removeEventListener('keydown', onKeyDown);
  };
  },[slideShow, setConfettiSpawners, confettiSpawners]);
  
  useEffect(() => {
    slideShow.subscribeOnStateChanged((slide) => {
    setSlide(slide);
    });
  },[currentSlide, setSlide, slideShow]);
  return <>
  {currentSlide}
  {confettiSpawners.map(() => {return <>
     <ParticleSystem
     position={new Vector2(-200, window.outerHeight-200)}
     direction={-80}
     spreadAngle={60}
     minInitialForce={400}
     maxInitialForce={1000}
     minSize={new Vector2(5, 10)}
     maxSize={new Vector2(20, 30)}
     maxSpawnCount={500}
    spawnRate={0}
    burstInterval={0}
    burstRate={300}
    burstRepetition={1}
    lifetime={5} 
    colors={[new Color(256, 0, 0), new Color(0, 256, 0),new Color(256, 256, 0), new Color(0, 0, 256)]}/>

    <ParticleSystem
     position={new Vector2(window.outerWidth+200, window.outerHeight-200)}
     direction={-170}
     spreadAngle={60}
     minInitialForce={400}
     maxInitialForce={1000}
     minSize={new Vector2(5, 10)}
     maxSize={new Vector2(20, 30)}
     maxSpawnCount={500}
    spawnRate={0}
    burstInterval={0}
    burstRate={300}
    burstRepetition={1}
    lifetime={5} 
    colors={[new Color(256, 0, 0), new Color(0, 256, 0),new Color(256, 256, 0), new Color(0, 0, 256)]}/>
    </>
    })}
  </>;
}

export default App;
