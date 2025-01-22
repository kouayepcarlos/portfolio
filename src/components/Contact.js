import '../App.css'
import { Envelope, GeoAlt, Telephone, Linkedin, Github } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import { Button, Card } from 'react-bootstrap';


import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";




function Contact() {


    const slideInBottom = (elem, delay, duration)=>{
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
  
  
      useEffect(() => {
        slideInBottom("#contact","1","3")
      }, []);  
  

    
    return(
        <div className='contact' id='contact'>
                <h2>Contactez-moi</h2>
                <p className='contactPara'>N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>

                <div className="contactBlog">
                    <Card className='cardBlog'>
                        <card-body>
                        <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nom </Form.Label>
                            <Form.Control type="text" placeholder="Votre nom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Addresse Email </Form.Label>
                            <Form.Control type="email" placeholder="Votre adresse mail" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='Messages...' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#EF8F0A', borderColor: '#EF8F0A' }}>
                                Envoyer
                            </Button>
                        </Form.Group>
                    </Form>
                        </card-body>
                    </Card>

                    <div className='BlocIcons' style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                            <GeoAlt style={{ marginRight: '10px', color: 'white' }} />
                            <span>20 Edmond Esmonin, 38100 Grenoble</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                            <Envelope style={{ marginRight: '10px', color: 'white' }} />
                            <span>kouayeptankiojocelyn@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                            <Telephone style={{ marginRight: '10px', color: 'white' }} />
                            <span>0744816334</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="https://www.linkedin.com/in/jocelyn-kouayep/" style={{ color: 'white', textDecoration: 'none' }}>
                                <Linkedin style={{ marginRight: '20px', color: 'white' }} />
                            </a>
                            <a href="https://github.com/kouayepcarlos?tab=repositories" style={{ color: 'white', textDecoration: 'none' }}>
                                <Github style={{ marginRight: '10px', color: 'white', fontSize: '20px' }} />
                            </a>
                        </div>
                    </div>

                   



                    
                </div>

               <p className='bas'>Je suis à votre écoute pour tout besoin ou offre !</p>
        </div>
    )
}

export default Contact