import ship from "./img/img.svg";
import one from "./img/1.svg";

export function About() {
  return (
    <div className="about">
      <div className="about__text">
        <p className="about__welcome">Welcome to site</p>
        <h1 className="about__headline">Hi! this is layout template</h1>
        <p className="about__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, obcaecati aliquid! Quasi, maxime? Vero quis obcaecati aut distinctio iure, totam fuga. Enim inventore officia perspiciatis magni quae quas qui esse voluptate nihil minus iure, harum nisi eius repellendus, corporis aliquid.</p>
        <button className="about__btn">Let's connect!
          <img src={one} alt=""  />
        </button>
      </div>
      <img src={ship} className="about__img"></img>
    </div>
  );
}



