import { ProgressBar } from 'react-bootstrap';
import '../App.css'

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";


function Comptence() {

    const slideInRigth = (elem, delay, duration)=>{
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: 200
            },
            {
                opacity: 1,
                x : 0,
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
  
  
      useEffect(() => {
        slideInRigth("#competence","1","3")
      }, []);  
  


    const skills = [
        { name: 'Javascript, Html, Css, Bootstrap, WordPress, SEO', level: 95 },
        { name: 'Symfony, Laravel, PHP', level: 65 },
        { name: 'ReactJs , Java,  SpringBoot',  level: 70 },
        { name: 'Flutter, Dart',  level: 60 },
        { name: 'Github, Gitlab CI/CD, Docker, Ansible, Kubernetes, Sql, Scrum Master', level: 80 },
        { name: 'TDD, BDD', level: 75 },
      ];
    
    return(
        <div className="skills-container" id='competence'>
            <div className="row">
                <h2>Mes Compétences</h2>
                <p>Elles sont en constantes améliorations car pour moi la joie de ce métier fait que 
l’on en apprend tous les jours, et d’etre connecté aux nouvelles technologies</p>
                {skills.map((skill, index) => (
                    <div key={skill.name} className="col-md-6 skill-item">
                    <span className='compe'>{skill.name}</span>
                    <ProgressBar now={skill.level} label={`${skill.level}%`} animated />
                    </div>
                ))}
            </div>
        </div>
      
    )
}

export default Comptence;