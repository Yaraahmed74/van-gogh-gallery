import "./Story.css";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import van_gogh from "../assets/van_Gogh-removebg.webp";

function Story() {
  // const containerRefStory = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.set(".story-section > *", {
  //     x: 0,
  //     y: 20,
  //     opacity: 0,
  //   });

  //   ScrollTrigger.create({
  //     trigger: ".story-section",
  //     start: "top 80%",
  //     end: "bottom 20%",
  //     scrub: true,
  //     // markers: true,
  //     animation: gsap.to(".story-section > *", {
  //       duration: 1,
  //       stagger: 0.2,

  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //     }),
  //   });
  // }, []);

  return (
    <>
      {/* <div ref={containerRefStory}> */}
      <div className="story-section" id="Story">
        <div className="text-section">
          <div className="his-story"> his story </div>
          <div className="title">the man who painted stars</div>
          <p>
            Vincent van Gogh spent his whole life feeling like he didn't belong.
            He failed at being a preacher, failed at selling art, and failed at
            finding love. Almost everyone turned away from him. Only his brother
            Theo never did. He sent Vincent money, letters, and belief, even
            when Vincent had nothing else. Vincent painted like a man starving
            for beauty. He made more than 2,000 artworks, yet sold almost none.
            He battled his mind in silence, and in a moment of despair, he cut
            off part of his ear and ended up in an asylum. But even there, he
            looked up at the night sky and painted The Starry Night, turning his
            pain into swirling light. At 37, he died believing he was a failure.
            Theo died just six months later, heartbroken. Today, his paintings
            are among the most loved in the world. The man who died unseen is
            now seen by millions.
          </p>
          <blockquote>
            He never knew that the world would one day cry in front of his
            stars.
          </blockquote>
        </div>
        <div className="pic-section">
          <img src={van_gogh} alt="Vincent Van Gogh" img />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Story;
