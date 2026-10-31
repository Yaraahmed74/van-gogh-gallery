import "./Footer.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Footer() {
  useEffect(() => {
    const splitText = SplitText.create(".footer-quote", {
      type: "words",
    });
    gsap.from(splitText.words, {
      y: 30,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-quote",
        start: "top 80%",
        // markers: true,
      },
    });

    gsap.fromTo(
      ".footer-author",
      {
        clipPath: "inset(0% 50% 0% 0%)",
      },
      {
        duration: 1,
        ease: "power3.out",

        clipPath: "inset(0% 0% 0% 0%)",
        delay: 2,
        scrollTrigger: {
          trigger: ".footer-quote",
          start: "top 80%",
          // markers: true,
        },
      },
    );
    gsap.fromTo(
      ".footer-author-wrapper",
      {
        clipPath: "inset(0% 0% 0% 50%)",
      },
      {
        duration: 1,
        ease: "power3.out",

        clipPath: "inset(0% 0% 0% 0%)",
        delay: 2,
        scrollTrigger: {
          trigger: ".footer-quote",
          start: "top 80%",
          // markers: true,
        },
      },
    );
  }, []);

  return (
    <div className="footer">
      <p className="footer-quote">
        “If you hear a voice within you say ‘you cannot paint,’ then paint.”
      </p>
      <div className="footer-author-wrapper">
        <p className="footer-author">Vincent van Gogh</p>
      </div>
    </div>
  );
}

export default Footer;
