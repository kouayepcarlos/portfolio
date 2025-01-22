import { useRef, useEffect } from "react";
import gsap from "gsap";

function Debut() {

    const titleRef = useRef();

    const onLoad = ()=>{
        gsap.timeline().fromTo(".letter",
            {
                opacity : 0,
                x : -100
            },
            {
                opacity: 1,
                x : 0,
                stagger : 0.33,
                delay: 0.7
            }

        ).to(".title", {
            y: 45,
            delay: 0.7
        })
        .to(".letter",{
            delay: 0.8,
            duration: 0.5,
            margin : "0 5 vw"
        })
        .to(".letter", {
            margin: "0",
            delay: 0.8
        })
        .to(".letter", {
            x : - titleRef.current.clientWidth,
            delay : 1,
            duration : 2,
            rotate : -360
        })
        .to(window, {
            duration : 2,
            scrollTo : "#index",
            onComplete: () => {
                // Assurez-vous que le scroll est bien calé en haut de la section
                document.querySelector("#index").scrollIntoView({ behavior: "smooth" });
            },
        })
       
    }

    useEffect(() => {
            onLoad();
            
    }, []);
    return (
        
        <div>
            <h1 className="title" ref={titleRef}>
                <span className="letter">M</span>
                <span className="letter">O</span>
                <span className="letter">N</span>
                <span className="letter"> </span>
                <span className="letter">P</span>
                <span className="letter">O</span>
                <span className="letter">R</span>
                <span className="letter">T</span>
                <span className="letter">F</span>
                <span className="letter">O</span>
                <span className="letter">L</span>
                <span className="letter">I</span>
                <span className="letter">O</span>
            </h1>
        </div>
    )
}

export default Debut;