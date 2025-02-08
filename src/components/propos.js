import { Button } from "react-bootstrap";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slideInTop = (elem, delay, duration)=>{
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            y: -200
        },
        {
            opacity: 1,
            y : 0,
            delay : delay | 0.4,
            duration : duration | 0.6,
            scrollTrigger:{
              trigger: elem,
              start : "top center",
              end : "bottom center"
            }
        },
        
    )
}





function Propos() {

    useEffect(()=>{
        slideInTop("#propos", "1", "3")
    }, [])
    return(
        <div className="propos" id='propos'>
            <h2 className="proposH">A propos de moi ...</h2>
            <div className="bloc">
                <img src="./images/profil.png" alt="" />
                <div className="proposPara">
                    <p>Hello ! , dévéloppeur Web Full stack & Design, Fort de plusieurs expériences enrichissantes</p>
                    <p>J'ai eu l opportunité de travailler  au sein de structures variées telles que <b>Trampoline Park, LIG, Ingenuis-RM</b> et
                    <b>Orange.</b> </p>
                    <p>Ces stages m ont permis de développer une expertise solide en développement fullstack, marketing et en design, tout en m adaptant à des environnements de travail divers et exigeants.</p>
                    <p>Je suis convaincu que mon expérience peut aider les entreprises à atteindre leurs objectifs. N’hésitez pas à me contacter pour discuter de vos projets ainsi que leur mise en œuvre.</p>
                
                </div>
            </div>
            <a href="#portfolio"> <Button variant="primary">Voir Porfolio</Button> </a>

        </div>
    )
}

export default Propos;