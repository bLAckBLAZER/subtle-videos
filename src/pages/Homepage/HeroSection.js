import "./HeroSection.css";
import BackgroundImg from "../../assets/images/anime-bg.jpg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <figure className="img-container">
        <img src={BackgroundImg} alt="anime background" className="img-res" />
      </figure>
      <div className="hero-text txt-center">
        <div className="h1">Welcome to Anime world!</div>
        <p>Find all your favourite anime at one place</p>
        <Link to="/explore">
          <button className="btn btn-primary">Explore</button>
        </Link>
      </div>
    </section>
  );
};
