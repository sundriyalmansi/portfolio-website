
import Typed from "typed.js";
import './Header.css';
import { useEffect, useRef } from "react";
import Resume from '../Header/MS_UXD.pdf';
import arrow from '../Header/arrow.svg';
import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";


const Header = () => {


  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["UX Designer", "UI Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });


    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="header-wraper" id="homepage">
      <ParticlesComponent
        id="hero-particles"
        className=""
        particlesOptions={heroOptions}
      ></ParticlesComponent>
        <div className="socialmedialinks home">
          <a title = "Linkedin" href="https://www.linkedin.com/in/sundriyalm/" target="_blank" rel="noreferrer" class="sociallink w-inline-block"><div class="social-media-icons linkedin"></div></a>
          <a title = "GitHub" href="https://github.com/sundriyalmansi/" target="_blank" rel="noreferrer" class="sociallink w-inline-block"><div class="social-media-icons github"></div></a>
          <a title = "Case Studies" target="_blank" rel="noreferrer" class="sociallink w-inline-block" href="https://www.figma.com/proto/ZxJyGeMCFJAOAYQrFBsbDK/Mansi-UXD-Portfolio?page-id=0%3A1&node-id=0%3A4&viewport=241%2C48%2C0.42&scaling=min-zoom"><div class="social-media-icons caseStudies"></div></a>
        </div>
        <div className="main-info vertical-center">
          {/* <div className="award-banner">🏆 Featured Award winning Product</div> */}
          <h3>Hi, I am Mansi <img src="https://img.icons8.com/emoji/24/000000/waving-hand-emoji.png" className="hand" alt="project" /></h3>
          <p></p>
          <div className="typed-css">
            <span ref={el} className="typed-css"></span>
          </div>
          <p></p>
          <div className="intro-paragragh">
            <p className="desc">I have an eye for <span className="orange">innovation</span>, <span className="orange">problem solving</span> and <span className="orange">developing</span> amazing user experiences. I am passionately working towards combining front end engineering with UX principles.
              Currently crafting Awesome apps for <span className="orange">DISH Wireless</span> within the AI domain.
            </p>
            </div>
        </div>
        <div class="arrow">
          <a className="downloadcv" href={Resume} download="Mansi_Resume">Download Resume</a>
          <a href="#skillspage" class="w-inline-block"><img src={arrow} loading="lazy" width="73" alt="" class="image-119 project-adj" /></a></div>
    </div>
  )
}


export default Header;  