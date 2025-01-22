import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


import { useEffect } from 'react';
import gsap from 'gsap';


function Accueil() {
  
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
  
  
    const slideInAccueil= (elem, delay, duration)=>{
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: -200
            },
            {
                opacity: 1,
                x : 0,
                delay : delay | 0.4,
                duration : duration | 0.6,
                ScrollTrigger:{
                  trigger: elem,
                  start : "top center",
                  end : "bottom center"
                }
            },
            
        )
    }
  
  
      useEffect(() => {
        slideInAccueil("#index","1","3")
      }, []);  
  






  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Téléchargement du fichier PDF
    const link = document.createElement('a');
    link.href = './images/CV_JOCELYN_KOUAYEP_TANKIO.pdf'; // Remplacez par le chemin de votre PDF
    link.download = 'CV.pdf'; // Nom du fichier téléchargé
    link.click();

    // Retire l'effet de clic après un moment (optionnel)
    setTimeout(() => setClicked(false), 300);
  };
    return(
        <div className="bg-cover bg-center h-screen accueil" id='index' style={{ backgroundImage: "url('./images/acceuil.jpg')" }}>
            <div className="menu" id='accueil'>
                <h2 className="menuH">DevCarl</h2>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className={`mobileMenu ${menuOpen ? 'open' : ''}`} menuLien>
                    <a href="#accueil" onClick={toggleMenu}>Accueil</a>
                    <a href="#propos" onClick={toggleMenu}>A propos</a>
                    <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
                    <a href="#competence" onClick={toggleMenu}>Compétences</a>
                    <a href="#contact" onClick={toggleMenu}>Contact</a>
                </div>
                <div className="menuLien">
                    <a href="#accueil">Accueil</a>
                    <a href="#propos">A propos</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#competence">Compétences</a>
                    <a href="#contact"> Contact</a>

                    <Button
                        variant="secondary"
                        onClick={handleClick}
                        className={clicked ? 'border border-3 border-danger' : ''}
                        >
                        Download CV
                    </Button>
                </div>
            </div>

            <div className="presentation" >
                <div className='present'> 
                    <h3>Bonjour je suis,</h3>
                    <h3>Jocelyn Kouayep</h3>
                    <h3>Développeur fullstack & Designer</h3>
                    <h5>Passionné par la création de solutions numériques innovantes, je suis spécialisé en ReactJs, Symfony et SpringBoot</h5>
                    <div className='presentButton'>
                        <a href="#contact"><Button variant='secondary'><span className='meContact'>Me contacter</span></Button></a>
                        <a href="#propos"><h5>A propos de moi</h5></a>
                    </div>
                </div>
                <div class="position-relative cercle"> 
                   
                    <img src="./images/prof.png" alt="" className='profIMage'/>
                    <img src="./images/circle.png" alt=""  className="circle" />
                </div>
            </div>
        </div>
    )
}

export default Accueil;