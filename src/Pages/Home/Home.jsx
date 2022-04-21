import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {FaFacebook, FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import { init } from "ityped";

import Photo from "../../images/photo.jpg";

import "./home.scss";

function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    })
  }, []);

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
        <h1 className="home__title"> <i> Jalyn Kyrgyz</i> </h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p className="home__left-descr">A highly motivated, adaptable and responsible Military graduated applying for the position as a <span className="home__left-position"> Frontend React Developer  </span> in any place of the world. My military background, experiences in different positions, including management positions can help me to fill full my future possible tasks. I have a methodical approach to work and strong ability to adapt to any environment.</p>
          <ul className="home__links">
                <li>
                    <a href="https://www.facebook.com/jalynu" target="_blank" rel='noopener, noreferer'><FaFacebook className='home__icon'/></a>
                </li>
                <li>
                    <a href="https://github.com/jalynkyrgyz" target="_blank" rel='noopener, noreferer'><FaGithub className='home__icon' /></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/jalyn-kyrgyz-uulu-1ba915212/" target="_blank" rel='noopener, noreferer'><FaLinkedinIn className='home__icon'/></a>
                </li>
                <li>
                     <a href="https://www.instagram.com/jalynkyrgyz/" target="_blank" rel='noopener, noreferer'><FaInstagram className='home__icon'/></a>
                </li>
         </ul>
         <Link to="/contact" className='home__cta'>Contact me</Link>
        </div>
        <div className="home__right">
        <img src={Photo} alt="Jalyn Kyrgyz" />
        </div>
      </div>
    </section>
  );
}

export default Home;



