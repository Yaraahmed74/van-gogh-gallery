import { useEffect } from "react";
import "./Hero.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ReactPlayer from "react-player";
import heroBackground from "../assets/hero_background.webp";

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    const words = SplitText.create(".hero-split-words", {
      type: "words",
    });
    const lines = SplitText.create(".hero-split-lines", {
      type: "lines",
    });

    tl.from(words.words, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.5,
    }).from(lines.lines, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  const media = (isVideo) => {
    if (isVideo) {
      return (
        <div className="hero-video">
          <ReactPlayer
            className="react-player"
            src="https://youtu.be/qyf1hSIJdLM?t=8"
            loop
            playing
            muted
            width="100%"
            height="100%"
          />
        </div>
      );
    }

    return (
      <div className="hero-image">
        <img src={heroBackground} alt="Van Gogh hero background" />
      </div>
    );
  };

  return (
    <section className="hero" id="/">
      {media(false)}

      <div className="hero-content">
        <div className="birth hero-split-lines">1853 - 1890</div>
        <h1 className="name hero-split-words">van gogh</h1>
        <h4 className="art-gallery hero-split-lines">art gallery</h4>
        {/* <p className="quote hero-split-lines">the world through van gogh's eyes</p> */}
        <p className="quote hero-split-lines">
          "I dream my painting, and I paint my dream."
        </p>
      </div>

      <div className="scroll">
        <div className="scroll-line"></div>
        <span className="scroll-text">scroll</span>
      </div>
    </section>
  );
}

export default Hero;
