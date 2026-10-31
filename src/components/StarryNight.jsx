import starry_night from "../assets/Starry_Night.jpg";
import brush from "../assets/brush.png";
import "./StarryNight.css";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
 
function StarryNight() {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const split = SplitText.create(".story-p", {
  //     type: "lines",
  //     linesClass: "animate-y",
  //   });

  //   gsap.set(".animate-y", { y: 20, opacity: 0 });
  //   // gsap.set("animate-scale", { y: 20, scale: 1 });

  //   ScrollTrigger.create({
  //     id: "asd-y",
  //     trigger: ".StarryNight-section",
  //     start: "top bottom-=50%",
  //     end: "bottom bottom-=50%",
  //     animation: gsap.to(".animate-y", {
  //       duration: 0.75,
  //       stagger: 0.05,
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //       ease: "power3.out",
  //     }),
  //   });

  //   // ScrollTrigger.create({
  //   //   id: "asd-scale",
  //   //   trigger: ".StarryNight-section",
  //   //   start: "top bottom-=50%",
  //   //   end: "bottom bottom-=50%",
  //   //   markers: true,
  //   //   animation: gsap.to(".animate-scale", {
  //   //     duration: 0.75,
  //   //     stagger: 0.05,
  //   //     x: 0,
  //   //     y: 0,
  //   //     scale: 2,
  //   //   }),
  //   // });

  //   return () => {
  //     split.revert();
  //     // trigger.kill();
  //   };
  // }, []);

  return (
    // <div ref={containerRef}>
    <div className="StarryNight-section" id="StarryNight">
      <div className="StarryNight-text-section">
        <div className="famous-painting animate-y">
          his most famous painting
        </div>
        <div className="StarryNight-title animate-y">the starry night</div>
        <p className="story-p">
          In June 1889, behind the bars of an asylum in Saint-Rémy, Vincent van
          Gogh painted a sky he could never leave. From his window he had the
          morning star and the dark hills. The quiet village and the cypress he
          imagined, a peace he longed for and a tree reaching toward heaven.
        </p>
        <p className="story-p">
          But he didn't paint the night as it was. He painted the night as he
          felt it: restless, trembling, and alive with a light that refused to
          go out. Every swirl is a thought he couldn't silence, every star a
          small hope burning inside the dark.
        </p>
        <p className="story-p">
          That is why we can't look away. We are not just looking at a sky. We
          are looking at a mind in turmoil that still chose to create beauty.
        </p>
        <blockquote className="story-p">
          It is not a quiet night. It is a night that never stops moving.
        </blockquote>
      </div>

      <div className="StarryNight-pic-section animate-scale">
        <div className="starry-night-image">
          <img src={starry_night} alt="The Starry Night" />
        </div>
        <div className="brush-image">
          <img src={brush} alt="" />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default StarryNight;
