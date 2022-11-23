import "./intro.scss";
import mainVideo from "../../images/video.mp4";
import { IoIosArrowDown } from "react-icons/io";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "redes sociais.",
        "sistemas internos.",
        "sistemas externos.",
        "marketing.",
        "público alvo.",
      ],
    });
  }, []);
  return (
    <main className="intro" id="intro">
      <div className="bg-video">
        <video src={mainVideo} type="video/mp4" autoPlay muted loop />
      </div>
      <div className="overlay"></div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, Somos a</h2>
          <h1>SI Marketing</h1>
          <h3>
            <span>Cuidamos</span> para sua
            <br />
            empresa os seus
            <br />
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <IoIosArrowDown />
        </a>
      </div>
    </main>
  );
}
