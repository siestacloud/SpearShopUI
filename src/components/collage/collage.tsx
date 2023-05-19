import one from "./img/1.jpg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import four from "./img/4.jpg";
import five from "./img/5.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface props {
  show: boolean
}
export function Collage() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1324 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1324, min: 900 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1
    }
  };



  return (
    <article className="collage" >
      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme stickers__gallery">

      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${two})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${three})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${four})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${five})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
  
      </Carousel>

    </article>
  );
}
